import{r as M,j as r}from"./iframe-CB_IvR8I.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-dlTd3aD7.js";import{L as P}from"./Label-DQjiInKi.js";import{u as N,F as z,a as U}from"./Form-DpTUUNrZ.js";import{s as Y}from"./Action-DXrBr-ZU.js";import{B as h}from"./Button-B6pH5E7T.js";import{m as Z}from"./IconWarning-DHvxn9zQ.js";import{C as G}from"./CopyButton-BmwpaDbZ.js";import"./PropsContextProvider-CQ73sAu4.js";import"./mergeRefs-CSVQQCMz.js";import"./index-dvXJvLk3.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-7I8SRRkd.js";import"./utils-g_K47B_Q.js";import"./Text-B8w1c0_W.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BtoN_DlS.js";import"./Hidden-jmCIdXP6.js";import"./useFocusRing-gt8SzE7T.js";import"./useFocus-B0PqsM1A.js";import"./TextField-nXjEyJdg.js";import"./Form-BSDtEK6z.js";import"./useLabel-DNzpHOuu.js";import"./Label-kjSyRRrG.js";import"./useTextField-Dvn-D0Cy.js";import"./useFormReset-DVL0Bkgs.js";import"./useControlledState-CS3WyH2d.js";import"./useFocusable-B2StGM5o.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-COPLGoQY.js";import"./FieldDescription-CzRSGrqM.js";import"./Text-C_h1oOw9.js";import"./browser-CyPw7Cgt.js";import"./EmulatedBoldText-B-vVao8K.js";import"./Tooltip-QT9S7QV8.js";import"./OverlayArrow-01R9fjkr.js";import"./ProgressBar-DB_rXcaP.js";import"./context-CQpLcUPr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BKMvXLmW.js";import"./ReactAriaControlledValueFix-DdwC-f5X.js";import"./ContextualHelpTrigger-C2l39BvH.js";import"./Popover-7BARD7J6.js";import"./DialogTriggerView-SiWvQg2j.js";import"./context-B4EC4nRx.js";import"./useStatic-y0oZYxL5.js";import"./Dialog-nVDPewl7.js";import"./Button-BNZImaSB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BSSkfFZ6.js";import"./RSPContexts-PWzkBgmU.js";import"./Collection-BYXnLO4u.js";import"./CollectionBuilder-opZAg4uy.js";import"./Separator-Bv7qspKp.js";import"./SearchField-CR8AG0pb.js";import"./useEvent--a1AA2TN.js";import"./SelectionManager-DyWAPqsT.js";import"./useCollator-3DG3Mrdl.js";import"./FocusScope-2f5e0YPn.js";import"./VisuallyHidden-D4WM3JvY.js";import"./Heading-5jxFfyfL.js";import"./Heading-9QvowWck.js";import"./getActionGroupSlot-Bj-rdEEm.js";import"./LoadingSpinner-B018WmYG.js";import"./react-children-utilities-Rjxv6AYF.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
