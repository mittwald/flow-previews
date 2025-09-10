import{r as M,j as r}from"./iframe-DcFGg16D.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-CEJscRSv.js";import{L as P}from"./Label-DUWIrMUF.js";import{u as N,F as z,a as U}from"./Form-BsijhcD9.js";import{s as Y}from"./Action-BHkIIo1y.js";import{B as h}from"./Button-DJ4LLcBR.js";import{m as Z}from"./IconWarning-CHPRxwlr.js";import{C as G}from"./CopyButton-D1LNH7uD.js";import"./PropsContextProvider-BUogT5Xb.js";import"./mergeRefs-OVYq_ib7.js";import"./index-CDaG_HQK.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Dg2s55Gd.js";import"./utils-MGL4-aZB.js";import"./Text-Bo-pyWRw.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Cfinkx-g.js";import"./Hidden-Cmuw7QWn.js";import"./useFocusRing-C2kFO1mh.js";import"./useFocus-U4AMFjB6.js";import"./TextField-DxEII3el.js";import"./Form-67TyawWi.js";import"./useLabel-BWfTCaKH.js";import"./Label-DA_WgLUG.js";import"./useTextField-DnoqRTqc.js";import"./useFormReset-CHCY757v.js";import"./useControlledState-ecFtZ1Px.js";import"./useFocusable-CBHGItg9.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CkYOPuvt.js";import"./FieldDescription-BjLPvxW4.js";import"./Text-DMVvzt3E.js";import"./browser-CVxrqIOh.js";import"./EmulatedBoldText-BLYaA1Bn.js";import"./Tooltip-CpVCFjr9.js";import"./OverlayArrow-D67G4pFu.js";import"./ProgressBar-B1oFmI6J.js";import"./context-2JOSlQoN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BA09CE4K.js";import"./ReactAriaControlledValueFix-C1sZs9Tb.js";import"./ContextualHelpTrigger-BXuAnSaf.js";import"./Popover-DNcGxoGD.js";import"./DialogTriggerView-I--QKd5T.js";import"./context-DiGr7rSI.js";import"./useStatic-DiqMOEo2.js";import"./Dialog-BjymA24M.js";import"./Button-eLaBErzq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dxku2mh7.js";import"./RSPContexts-BGgHSZk2.js";import"./Collection-DSC_s3_U.js";import"./CollectionBuilder-C1fftWwC.js";import"./Separator-RxFnsY_N.js";import"./SearchField-DOOJGDQj.js";import"./useEvent-Ca5y4KLG.js";import"./SelectionManager-Cc_FCoHE.js";import"./useCollator-IqIPfKpf.js";import"./FocusScope-Csa5zz-0.js";import"./VisuallyHidden-MvD6uM4h.js";import"./Heading-n_TZDmqA.js";import"./Heading-B3gs3td_.js";import"./getActionGroupSlot-CBzmOk9k.js";import"./LoadingSpinner-B2KP9AW1.js";import"./react-children-utilities-BlU-ltQy.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
