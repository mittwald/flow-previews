import{r as M,j as r}from"./iframe-PPscN4tr.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-DuA2waNO.js";import{L as P}from"./Label-Bf1duK2q.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-BeMUT1Qa.js";import{s as Y}from"./Action-Cx_qZqiS.js";import{B as h}from"./Button-DOt7fXGF.js";import{q as Z}from"./IconWarning-DCjExedU.js";import{C as G}from"./CopyButton-ZZJRNzkU.js";import"./dynamic-DLKBnFH6.js";import"./PropsContextProvider-cBval16A.js";import"./mergeRefs-DnJs-uwA.js";import"./index-DZCrbm-c.js";import"./clsx-B-dksMZM.js";import"./FieldError-Ccwwr1FD.js";import"./utils-DsPiQVUE.js";import"./Text-DOZF1D9Q.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Bw_Vhw_L.js";import"./Hidden-BSzw0V8U.js";import"./useFocusRing-gcrQa-4U.js";import"./useFocus-C4zNlByO.js";import"./TextField-C9dqtDV6.js";import"./Form-D8YNg8fo.js";import"./useLabel-BehMUX7z.js";import"./Label-CdjKXy54.js";import"./useTextField-DGdrajZE.js";import"./useFormReset-CpR4G9FH.js";import"./useControlledState-Bj7Ci1Bi.js";import"./useFocusable-BzFu29N-.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-_wKjORAk.js";import"./FieldDescription-DF-WO_WU.js";import"./Text-Cr4g403k.js";import"./browser-BBEx8dXu.js";import"./EmulatedBoldText-2c05oBpj.js";import"./Tooltip-S5dN5skm.js";import"./ClearPropsContextView-CiAwXYC8.js";import"./ProgressBar-jJ6XsPfz.js";import"./context-BC4DP49M.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DxKsOw5A.js";import"./ReactAriaControlledValueFix-CKE4t8pW.js";import"./ContextualHelpTrigger-Dk1LvUjJ.js";import"./Popover-B4Thu_Ca.js";import"./DialogTriggerView-B2ubRe0W.js";import"./context-DPnYEMwE.js";import"./useStatic-BImXXSW3.js";import"./Button-Dq2iCs8C.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BKGHEFGx.js";import"./RSPContexts-CmKI408-.js";import"./FocusScope-DT8YcIVm.js";import"./useCollator-DgDjDGmg.js";import"./VisuallyHidden-DdPky-fR.js";import"./Collection-C__y2sy-.js";import"./CollectionBuilder-BAD3bxW3.js";import"./Separator-CQECSlkM.js";import"./SearchField-BPbBm38f.js";import"./useEvent-Dso9VxuL.js";import"./SelectionManager-D_TAE1Vs.js";import"./Heading-BOw_RV8p.js";import"./Heading-__tDMM6f.js";import"./useManagedValue-BRv4Acjn.js";import"./getActionGroupSlot-CEref5CZ.js";import"./LoadingSpinner-BmIM-aij.js";import"./react-children-utilities-BFJTfxZa.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
