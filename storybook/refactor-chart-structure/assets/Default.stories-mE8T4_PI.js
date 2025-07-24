import{r as A,j as r}from"./iframe-B14Hztna.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-BHhSZmKC.js";import{L as h}from"./Label-zfejy0bC.js";import{u as z,F as U,a as Y}from"./Form-DNeIsDac.js";import{s as Z}from"./Action-C7DGnd--.js";import{B as u}from"./Button-CgtdFPzc.js";import{m as $}from"./IconWarning-EXdx-O5E.js";import{C as k}from"./CopyButton-Bw2sVibt.js";import"./PropsContextProvider-uadcFCMp.js";import"./mergeRefs-Bv4UzjNV.js";import"./index-BavqP8B-.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Bx0_OVZy.js";import"./utils-DoVwnhJ7.js";import"./Text-CpIc-G8R.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-CBVKEx7-.js";import"./useFocusRing-BniRYtyP.js";import"./useFocus-DUtc_xDc.js";import"./Input-DpcS1CTS.js";import"./Hidden-DEGhv2S1.js";import"./TextField-CPtvewAJ.js";import"./Form-Dxjc7g8l.js";import"./useLabel-BQ9idzkA.js";import"./Label-Dj1DBquH.js";import"./useTextField-BRjgXeuB.js";import"./useFormReset-C7VrIa_J.js";import"./useControlledState-ByF29kyY.js";import"./useFocusable-qJIKezDE.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DMf0Tswo.js";import"./FieldDescription-BwyiFDmb.js";import"./Text-CvN8mc0t.js";import"./browser-DQtsHFqq.js";import"./EmulatedBoldText-CgkGARPI.js";import"./Tooltip-hPeB6Yuu.js";import"./OverlayArrow-DZfk_ErB.js";import"./ProgressBar-DTeLqJx_.js";import"./context-ClRpg4Pi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Dv2L7e6J.js";import"./ReactAriaControlledValueFix-BqvDOkT-.js";import"./ContextualHelpTrigger-om4gIg7j.js";import"./Popover-04r-SnMx.js";import"./DialogTriggerView-jAz3y-z7.js";import"./context-BfdzKOWn.js";import"./useStatic-CMMnV-8N.js";import"./Dialog-BFvasG0n.js";import"./Button-C-dpYs0v.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CIDHtETH.js";import"./RSPContexts-Bfi0I49R.js";import"./Collection-fH4Kmtgq.js";import"./CollectionBuilder-bLuJ-4e5.js";import"./Separator-D2GbxrzK.js";import"./SearchField-BKuT-taP.js";import"./SelectionManager-DXvn-F5v.js";import"./useEvent-CXj5GaK9.js";import"./useCollator-BOITc0eH.js";import"./FocusScope-GGet2N6d.js";import"./VisuallyHidden-B90-554O.js";import"./Heading-BQAgHHsC.js";import"./Heading-CdQRJe-S.js";import"./getActionGroupSlot-Coxgvja7.js";import"./LoadingSpinner-BUgI2O_m.js";import"./react-children-utilities-BImoFgT_.js";import"./onlyText-DugIFfuw.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},de={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
