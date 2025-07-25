import{r as A,j as r}from"./iframe-BjkHoCV_.js";import{d as I,e as M,P as a,U,n as s,r as K}from"./PasswordCreationField-CRGYVtkG.js";import{L as h}from"./Label-BYU6zcWR.js";import{u as N,F as z,a as Y}from"./Form-x4DN-GwU.js";import{s as Z}from"./Action-CzPwWBMx.js";import{B as u}from"./Button-DVqiRGCO.js";import{m as $}from"./IconWarning-CwiGKHoc.js";import{C as k}from"./CopyButton-zP4CUNIu.js";import"./PropsContextProvider-C_mzLhgD.js";import"./mergeRefs-DrT8tsnG.js";import"./index-BhskFd1j.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BxnpY5Jk.js";import"./utils-CGiEt-XO.js";import"./Text-C4ERGDAc.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-CFG6yZ2f.js";import"./useFocusRing-Wt9DLJeW.js";import"./useFocus-xSbgpmNE.js";import"./Input-CkroWKbe.js";import"./Hidden-CDdp3qbI.js";import"./TextField-gOyCtBR-.js";import"./Form-PglXiK24.js";import"./useLabel-1QSzRNK-.js";import"./Label-B_ZT4LJD.js";import"./useTextField-DkP6KCaQ.js";import"./useFormReset-DzRnd0mU.js";import"./useControlledState-DGwCCxzP.js";import"./useFocusable-CXhBXWqP.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-mxRvqHca.js";import"./FieldDescription-CbqPGn6F.js";import"./Text-eTJAYSJY.js";import"./browser-D-wpRimX.js";import"./EmulatedBoldText-Bcu9u8Hb.js";import"./Tooltip-wJTb81EN.js";import"./OverlayArrow-BOh6Y0Vd.js";import"./ProgressBar-B7PSoMX-.js";import"./context-rlbqmEoV.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-dqhA2Nz0.js";import"./ReactAriaControlledValueFix-CAFTLK0K.js";import"./ContextualHelpTrigger-Ce2Ziogm.js";import"./Popover-luZqOS3K.js";import"./DialogTriggerView-A1G7QU7L.js";import"./context-CsL7NKVl.js";import"./useStatic-D1q5yxzl.js";import"./Dialog-DTbN5TSI.js";import"./Button-Di6PObN5.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEdNq8mA.js";import"./RSPContexts-B3qavTDI.js";import"./Collection-CFDXeLKH.js";import"./CollectionBuilder---ElTJdF.js";import"./Separator-s9nTWt-s.js";import"./SearchField-C9v5dfT_.js";import"./SelectionManager-DffnzBv0.js";import"./useEvent-DmGZIyRy.js";import"./useCollator-BsISA5DC.js";import"./FocusScope-mH_5A_-I.js";import"./VisuallyHidden-DAjtA0IX.js";import"./Heading-LmDvZV8j.js";import"./Heading-D8l_AjAM.js";import"./getActionGroupSlot-Bo5RA54w.js";import"./LoadingSpinner-DEvuHU_p.js";import"./react-children-utilities-B2SSvYDZ.js";import"./onlyText-Br1U2nBo.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return M(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",min:1}]},de={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=U.fromDeclaration(H),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
