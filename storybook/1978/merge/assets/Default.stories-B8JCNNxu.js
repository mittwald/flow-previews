import{r as M,j as r}from"./iframe-Ddl3oy7j.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BmiBX8zR.js";import{L as P}from"./Label-CPFqIdaY.js";import{u as N,F as z,a as U}from"./Form-DhHChfyG.js";import{s as Y}from"./Action-DUd3tSxu.js";import{B as h}from"./Button-DqaKYKf3.js";import{m as Z}from"./IconWarning-c_EtJYHN.js";import{C as G}from"./CopyButton-D--jUyLR.js";import"./PropsContextProvider-CnW5HdO8.js";import"./mergeRefs-C9z6gsFG.js";import"./index-C1skfeMg.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DKHffRep.js";import"./utils-Ci_tygJf.js";import"./Text-sFlu2MbQ.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DIPAAm7c.js";import"./Hidden-ywj4FOpy.js";import"./useFocusRing-BmS0Hu73.js";import"./useFocus-DmoZ0prk.js";import"./TextField-WM0IMQR5.js";import"./Form-BuMmY0ok.js";import"./useLabel-DcZpZe32.js";import"./Label-3HbXpuHu.js";import"./useTextField-FYLvyiMg.js";import"./useFormReset-DqrIwWOQ.js";import"./useControlledState-CmfVHeBq.js";import"./useFocusable-Czgc212e.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-D1LH8qMf.js";import"./FieldDescription-CeyOZW-A.js";import"./Text-QWoB1dLM.js";import"./browser-bNZZs8J3.js";import"./EmulatedBoldText-CxwJM-M1.js";import"./Tooltip-BeiYGpji.js";import"./OverlayArrow-BcGuja2I.js";import"./ProgressBar-DxjBV5HR.js";import"./context-DO4TRSlT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CALAZrAH.js";import"./ReactAriaControlledValueFix-QpyB1Smh.js";import"./ContextualHelpTrigger-CXAcogSP.js";import"./Popover-VwLdfteC.js";import"./DialogTriggerView-d2hqROxE.js";import"./context-CodLc8vz.js";import"./useStatic-CuoXAQeJ.js";import"./Dialog-BWiPBE7M.js";import"./Button-DtXFMSeo.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CocvpA_Y.js";import"./RSPContexts-DkASzfG8.js";import"./Collection-CvGKQDYH.js";import"./CollectionBuilder-B4jSBOCT.js";import"./Separator-C6XPVHs3.js";import"./SearchField-DspYPOuY.js";import"./useEvent-DmjLh1yy.js";import"./SelectionManager-Dg6K_iw1.js";import"./useCollator-B4sklduu.js";import"./FocusScope-xkAre9m0.js";import"./VisuallyHidden-D1ge_fMG.js";import"./Heading-CIxDrxL5.js";import"./Heading-C93AsN8G.js";import"./getActionGroupSlot-Ceebw4du.js";import"./LoadingSpinner-CMgBxs5g.js";import"./react-children-utilities-DUO3mpW1.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
