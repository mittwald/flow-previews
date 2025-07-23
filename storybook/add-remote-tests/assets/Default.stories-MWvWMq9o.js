import{r as A,j as r}from"./iframe-CYUlilGp.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-Dv8hoyfQ.js";import{L as h}from"./Label-Ciz8t2Io.js";import{u as z,F as U,a as Y}from"./Form-5VHA0Q5l.js";import{s as Z}from"./Action-W129oGJ4.js";import{B as u}from"./Button-BfM0n2Gx.js";import{m as $}from"./IconWarning-ghAEmGH8.js";import{C as k}from"./CopyButton-DZ9cHDyM.js";import"./PropsContextProvider-CDe6Qqh3.js";import"./mergeRefs-R35jcO_1.js";import"./index-BQ87YLqe.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BpkjstJ1.js";import"./utils-IwmXOWz0.js";import"./Text-DsFZoYY-.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-_cQVCYDW.js";import"./useFocusRing-Bl1ft2NQ.js";import"./useFocus-6n3T7pEK.js";import"./Input-CJk741gA.js";import"./Hidden-CtQ_5AUI.js";import"./TextField-BqCOguPh.js";import"./Form-CJHBPzNS.js";import"./useLabel-BQ0P6uHm.js";import"./Label-BzlJ5vcG.js";import"./useTextField-BchAki_m.js";import"./useFormReset-BKFhzP-_.js";import"./useControlledState-D9dJQ2qs.js";import"./useFocusable-hSKUHOaq.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BBFKNZH-.js";import"./FieldDescription-BJmqulzb.js";import"./Text-ot4TW2RP.js";import"./browser-BP1SPJnQ.js";import"./EmulatedBoldText-CMJy8lEl.js";import"./Tooltip-CETndFUz.js";import"./OverlayArrow-DFgxRKys.js";import"./ProgressBar-CLAf1-ry.js";import"./context-D26uRp-g.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-MUhpNbFs.js";import"./ReactAriaControlledValueFix-BTEMWuvP.js";import"./ContextualHelpTrigger-D3lQj3YB.js";import"./Popover-NGc5e56D.js";import"./DialogTriggerView-vjAZqBKE.js";import"./context-CPlmB9Cj.js";import"./useStatic-CaXlYNsR.js";import"./Dialog-E3oWZOKb.js";import"./Button-DY4YyasG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JEo6mDJS.js";import"./RSPContexts-8GpZLPll.js";import"./Collection-D4l8encG.js";import"./CollectionBuilder-B8Luejyn.js";import"./Separator-CYwUbqtz.js";import"./SearchField-B0kT3X35.js";import"./SelectionManager-BA-kOSfV.js";import"./useEvent-BKYwrgSI.js";import"./useCollator-BxGQV5d9.js";import"./FocusScope-AdChhofX.js";import"./VisuallyHidden-D7ZslAb9.js";import"./Heading-BPEr9Phm.js";import"./Heading-BcvtGSv_.js";import"./getActionGroupSlot-QiwrXWOU.js";import"./LoadingSpinner-CJLXwe_9.js";import"./react-children-utilities-CKr8CyMQ.js";import"./onlyText-BQxEEOlR.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},de={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var F,j,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(B=(j=m.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,D,R;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var v,L,V;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(V=(L=l.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var T,W,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(customPolicy)
      }} name="password">
          <PasswordCreationField validationPolicy={customPolicy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,O,E;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,ce as __namedExportsOrder,de as default};
