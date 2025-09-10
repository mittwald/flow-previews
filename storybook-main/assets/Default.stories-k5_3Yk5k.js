import{r as M,j as r}from"./iframe-B8noCUnE.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-Df5AYEZA.js";import{L as P}from"./Label-B1NlPlCA.js";import{u as N,F as z,a as U}from"./Form-D3yWSNdB.js";import{s as Y}from"./Action-BUJ71uGO.js";import{B as h}from"./Button-B3YMBdra.js";import{m as Z}from"./IconWarning-CGV_Yvrm.js";import{C as G}from"./CopyButton-BqkSy3jH.js";import"./PropsContextProvider-B9__2qg6.js";import"./mergeRefs-BTOy5cDw.js";import"./index-D9cNYuBB.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DD6GhKc_.js";import"./utils-DycHSEAg.js";import"./Text-C0NfSVbg.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-B5h_0xpF.js";import"./Hidden-CMD8PFZZ.js";import"./useFocusRing-BLe8ZvF0.js";import"./useFocus-DSdjnAxu.js";import"./TextField-IVl1Cmgq.js";import"./Form-BoGb9d1y.js";import"./useLabel-CluaPz9W.js";import"./Label-DKLhlgli.js";import"./useTextField-BKrTYTzq.js";import"./useFormReset-BTHbcpmM.js";import"./useControlledState-Dup9xG7O.js";import"./useFocusable-CKRftzjl.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-wApA5Tvl.js";import"./FieldDescription-D7-yAcu1.js";import"./Text-Da5wEoPX.js";import"./browser-91muAEwH.js";import"./EmulatedBoldText-DHCsJE01.js";import"./Tooltip-D6GO7eoS.js";import"./OverlayArrow-CUBciziX.js";import"./ProgressBar-7N6gfaNO.js";import"./context-Co6CbP9u.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D4YUkL9v.js";import"./ReactAriaControlledValueFix-DQ3jXnMe.js";import"./ContextualHelpTrigger-DF7gQf-e.js";import"./Popover-BajymHCd.js";import"./DialogTriggerView-CaeQRtG8.js";import"./context-BJExLDeV.js";import"./useStatic-D8Kg3g-R.js";import"./Dialog-gc4bcspb.js";import"./Button-CwMP1veT.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CGDWDrJK.js";import"./RSPContexts-CYAtt9lw.js";import"./Collection-B6gzk5_Q.js";import"./CollectionBuilder-DiBm4MiM.js";import"./Separator-BwYsz5vJ.js";import"./SearchField-gENajJ8Y.js";import"./useEvent-Y0Lkcg6v.js";import"./SelectionManager-D_SvmIZH.js";import"./useCollator-CP4AKmd0.js";import"./FocusScope-b3Inwx6M.js";import"./VisuallyHidden-Dp1jIams.js";import"./Heading-DlJiFfLx.js";import"./Heading-V5-rm1Vl.js";import"./getActionGroupSlot-CuZ7B-dR.js";import"./LoadingSpinner-a5nWuss2.js";import"./react-children-utilities-OEd2OeQ1.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
