import{r as M,j as r}from"./iframe-BPnb-8PC.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-is8dslDa.js";import{L as P}from"./Label-bLTq-ewh.js";import{u as N,F as z,a as U}from"./Form-B1foVCQX.js";import{s as Y}from"./Action-Bmubu_cL.js";import{B as h}from"./Button-chDOhf6m.js";import{m as Z}from"./IconWarning-j0MoznR6.js";import{C as G}from"./CopyButton-Cgg8S4RK.js";import"./PropsContextProvider-Cb7EFbEI.js";import"./mergeRefs-CPe5M-5f.js";import"./index-CxYrBtXy.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Dg8qbhsB.js";import"./utils-BNZdeyCH.js";import"./Text-KWqvWgwT.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BfJL9-FJ.js";import"./Hidden-Crd3-5R7.js";import"./useFocusRing-uXaHHV-0.js";import"./useFocus-CQt3VlDx.js";import"./TextField-DLL4ZGuM.js";import"./Form-CLKe_oCF.js";import"./useLabel-Mae_nSQP.js";import"./Label-V02MVWo9.js";import"./useTextField-YbT0qQ_m.js";import"./useFormReset-BXLcPYzT.js";import"./useControlledState-BZWp4i98.js";import"./useFocusable-DW9GZi2B.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-hQRdtdq8.js";import"./FieldDescription-CGFQo9BV.js";import"./Text-Ba-uZw6F.js";import"./browser-tQ-t1xxT.js";import"./EmulatedBoldText-B7r9Z-1q.js";import"./Tooltip-DtQJ_V0x.js";import"./OverlayArrow-DddHfoXR.js";import"./ProgressBar-C4vCg6TA.js";import"./context-Cvzu1MDH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CyshasSy.js";import"./ReactAriaControlledValueFix-cCDZWueK.js";import"./ContextualHelpTrigger-DvTEhnpw.js";import"./Popover-CEK-D9_R.js";import"./DialogTriggerView-B5ULWNQB.js";import"./context-DmMltsbs.js";import"./useStatic-2pKXc1Kg.js";import"./Dialog-ChpM20JY.js";import"./Button-DWahSmPc.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DbV6qfru.js";import"./RSPContexts-2Y1bGEeq.js";import"./Collection-FyZk2N5J.js";import"./CollectionBuilder-CoX_7NKP.js";import"./Separator-ACF8I6Sm.js";import"./SearchField-DgHP0CGL.js";import"./useEvent-C_P8io5N.js";import"./SelectionManager-BBZQaH8A.js";import"./useCollator-bsozdqlF.js";import"./FocusScope-CnAVXuaX.js";import"./VisuallyHidden-BEucGg6b.js";import"./Heading-DZGjjTVb.js";import"./Heading-BpH7y_My.js";import"./getActionGroupSlot-DxqE-qL0.js";import"./LoadingSpinner-BUt2pcHy.js";import"./react-children-utilities-D_AxOw8m.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=m.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,v;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(v=(D=l.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var R,L,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,W,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const le=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,le as __namedExportsOrder,pe as default};
