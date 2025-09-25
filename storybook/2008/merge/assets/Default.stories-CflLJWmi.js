import{r as M,j as r}from"./iframe-CQa7qTJa.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-C8Xn2U0Y.js";import{L as P}from"./Label-DFElwRl3.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-vko5YiGv.js";import{s as Y}from"./Action-D-hl0RaT.js";import{B as h}from"./Button-CHgvO37v.js";import{q as Z}from"./IconWarning-CeyZIf1V.js";import{C as G}from"./CopyButton-zOPL_lor.js";import"./dynamic-RkS6HP3_.js";import"./PropsContextProvider-C1od4eVS.js";import"./mergeRefs-Da4MPh46.js";import"./index-BsJVg0bb.js";import"./clsx-B-dksMZM.js";import"./FieldError-D5-jV0S5.js";import"./utils-cYx4gHhD.js";import"./Text-BRoIiTz6.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-D-4ygLJZ.js";import"./Hidden-Xar3rui2.js";import"./useFocusRing-DJ1LjUwE.js";import"./useFocus-C9JxIGDi.js";import"./TextField-BNBlfRPu.js";import"./Form-CF3ngYGn.js";import"./useLabel-DGKdhdH_.js";import"./Label-DUJFwkpM.js";import"./useTextField-DOzcbfzW.js";import"./useFormReset-DY9tf8Hl.js";import"./useControlledState-CFUYHrzm.js";import"./useFocusable-FCuKz-qE.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-j63R-YGj.js";import"./FieldDescription-B9BKUdu7.js";import"./Text-CH2mDEXN.js";import"./browser-BhSl0yCb.js";import"./EmulatedBoldText-Ce7b_D_t.js";import"./Tooltip-DRAQ8FN6.js";import"./ClearPropsContextView-CMBXwDsP.js";import"./ProgressBar-FMaJOq3V.js";import"./context-BU9KDZsm.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DxdNJ3BP.js";import"./ReactAriaControlledValueFix-D6LEN4ep.js";import"./ContextualHelpTrigger-phiZiFxL.js";import"./Popover-DDG0vMkE.js";import"./DialogTriggerView-Cf-mCLAZ.js";import"./context-D_sCsAkv.js";import"./useStatic-ByirIl9X.js";import"./Button-DeHwua8T.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D-jgt3FH.js";import"./RSPContexts-C2Phcdxj.js";import"./FocusScope-C4mxiVmq.js";import"./useCollator-BHsFeSET.js";import"./VisuallyHidden-CQfZ6AGe.js";import"./Collection-CLijKRGN.js";import"./CollectionBuilder-BuoP7Qv-.js";import"./Separator-D9m_TYOZ.js";import"./SearchField-DroG_a10.js";import"./useEvent-CyQldz3u.js";import"./SelectionManager-CZ4deCBD.js";import"./Heading-BXYPAFki.js";import"./Heading-BffAmQNL.js";import"./useManagedValue-Cher_khU.js";import"./getActionGroupSlot-gbKAHcV0.js";import"./LoadingSpinner-DVFRCiEF.js";import"./react-children-utilities-KzZOWO9u.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
