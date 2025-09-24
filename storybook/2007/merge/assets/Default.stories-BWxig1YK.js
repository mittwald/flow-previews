import{r as M,j as r}from"./iframe-upPjViUi.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-DVzxTP9b.js";import{L as P}from"./Label-RDx-2swG.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-BA8KN0Ra.js";import{s as Y}from"./Action-Cb9jSIVt.js";import{B as h}from"./Button-BdUtk4-2.js";import{q as Z}from"./IconWarning-CwNATdER.js";import{C as G}from"./CopyButton-CJnJSm2l.js";import"./dynamic-Cvppd2SX.js";import"./PropsContextProvider-yJMP1aPs.js";import"./mergeRefs-q2W69vto.js";import"./index-RP-73gJI.js";import"./clsx-B-dksMZM.js";import"./FieldError-Dxc2xglq.js";import"./utils-D7Ud1rY1.js";import"./Text-CPJx-aex.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-ClmTbc4u.js";import"./Hidden-DUPaGITp.js";import"./useFocusRing-DBg1NGxh.js";import"./useFocus-CKR8Kfvk.js";import"./TextField-DM_RTlmg.js";import"./Form-CCPP_JFl.js";import"./useLabel-Bv0sV64n.js";import"./Label-VDo2pjQH.js";import"./useTextField-BoNbQLwS.js";import"./useFormReset-BGI-E8mB.js";import"./useControlledState-DJQ8YErb.js";import"./useFocusable-D-QSeIiW.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Cn-v5KPW.js";import"./FieldDescription-Cq9VHaF_.js";import"./Text-DrOfxU9W.js";import"./browser-BQR41_Xo.js";import"./EmulatedBoldText-gAgggVs5.js";import"./Tooltip-BUTc9Sqk.js";import"./ClearPropsContextView-CWLdfkB7.js";import"./ProgressBar-B2varhWC.js";import"./context-DUCBVekV.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BrLv4P2q.js";import"./ReactAriaControlledValueFix-rQlV-Lbr.js";import"./ContextualHelpTrigger-BOYwRzeT.js";import"./Popover-CM6Xbo5y.js";import"./DialogTriggerView-CYID30AX.js";import"./context-DSTBS2xh.js";import"./useStatic-BNGbJ6l6.js";import"./Button-CWtnBlrz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-nNimJg5a.js";import"./RSPContexts-CDfzDcm_.js";import"./FocusScope-cBvdiCGC.js";import"./useCollator-C5XQM9l2.js";import"./VisuallyHidden-svNoe17i.js";import"./Collection-C7hZcg-r.js";import"./CollectionBuilder-CvJppZRn.js";import"./Separator-NH6jHWUN.js";import"./SearchField-DoTA-SfC.js";import"./useEvent-DEpz7Cvb.js";import"./SelectionManager-CyC5TvbY.js";import"./Heading-BedWGYuH.js";import"./Heading-Cw_qLrj_.js";import"./useManagedValue-DdxFf2Md.js";import"./getActionGroupSlot-Dx3eCL3t.js";import"./LoadingSpinner-CzeOX1VK.js";import"./react-children-utilities-R5AjajeZ.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,q,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
