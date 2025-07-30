import{r as A,j as r}from"./iframe-DRNY0HV6.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-lGLL75ky.js";import{L as h}from"./Label-ByUmX-vC.js";import{u as z,F as U,a as Y}from"./Form-CVtlqum6.js";import{s as Z}from"./Action-DekOUdHR.js";import{B as u}from"./Button-B6yc1Izp.js";import{m as $}from"./IconWarning-BbRR4ujq.js";import{C as k}from"./CopyButton-Dp5LG2C2.js";import"./PropsContextProvider-fzQQ9o1S.js";import"./mergeRefs-BGrmltrg.js";import"./index-BKPaZinn.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-WemdyPf5.js";import"./utils-BGYRLt27.js";import"./Text-laSnJE4K.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BnZVzQNe.js";import"./Hidden-tTaWOvSZ.js";import"./useFocusRing-kW39cg4V.js";import"./useFocus-BhLRMKCW.js";import"./TextField-Bjv3Nexs.js";import"./Form-DE2ohvFV.js";import"./useLabel-DGx8VCK9.js";import"./Label-Ddh_b_TK.js";import"./useTextField-CR9o_0bN.js";import"./useFormReset-CQ99iq-2.js";import"./useControlledState-EC94ILpF.js";import"./useFocusable-BSwP4fZ7.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BR7j6BGO.js";import"./FieldDescription-CbamIeBX.js";import"./Text-oBJONlUH.js";import"./browser-D4tnjvnK.js";import"./EmulatedBoldText-B4cW62zw.js";import"./Tooltip-CqWKfRAS.js";import"./OverlayArrow-p5g0EdPE.js";import"./ProgressBar-Bn7inR-A.js";import"./context-wh02hEcl.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BEg4k6Ev.js";import"./ReactAriaControlledValueFix-CABNhOAl.js";import"./ContextualHelpTrigger-DhNW1Kkc.js";import"./Popover-BFrfWbji.js";import"./DialogTriggerView-C-I_oZhW.js";import"./context-Ceu1foDq.js";import"./useStatic-Kjlf0EN3.js";import"./Dialog-DNtMkIXU.js";import"./Button-k2MLEVng.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CqeZb5V3.js";import"./RSPContexts-CA3pTynJ.js";import"./Collection-BD7tjUyW.js";import"./CollectionBuilder-DcMhY1Ql.js";import"./Separator-BpqvMMaG.js";import"./SearchField-VUEN69Zq.js";import"./useEvent-Bg507xpS.js";import"./SelectionManager-DXHYZg2X.js";import"./useCollator-BrAMHcAl.js";import"./FocusScope-CchoPqp2.js";import"./VisuallyHidden-B4EZo48X.js";import"./Heading-WvxWXEvC.js";import"./Heading-HlN2s6ka.js";import"./getActionGroupSlot-BrLOW8U6.js";import"./LoadingSpinner-CWL8TI7G.js";import"./react-children-utilities-Dz54JKMA.js";import"./onlyText-iFquofh-.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,de as __namedExportsOrder,le as default};
