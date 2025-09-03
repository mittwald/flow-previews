import{r as M,j as r}from"./iframe-Bi2SfRmV.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BNHh3F9h.js";import{L as P}from"./Label-Bf2ieprX.js";import{u as N,F as z,a as U}from"./Form-B5qWMYwg.js";import{s as Y}from"./Action-C4D1p-D4.js";import{B as h}from"./Button-D5Xd0LEq.js";import{m as Z}from"./IconWarning-Bplgov_i.js";import{C as G}from"./CopyButton-DnD4yWNd.js";import"./PropsContextProvider-DaoyFYJY.js";import"./mergeRefs-DG37ux9F.js";import"./index-BPrHKF6N.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BIS3uJRl.js";import"./utils-Dxcmwd9a.js";import"./Text-CkSKd-Z_.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CNmX4nS8.js";import"./Hidden-B9tBmOSG.js";import"./useFocusRing-Cut0-bC1.js";import"./useFocus-C-Ng-ghT.js";import"./TextField-Cs62mBed.js";import"./Form-B_Pu4x7F.js";import"./useLabel-A5VLCzVG.js";import"./Label-HBAOkOC5.js";import"./useTextField-CloIwySk.js";import"./useFormReset-BRME98Hv.js";import"./useControlledState-CIKoypYK.js";import"./useFocusable-CoivSZnS.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CmL2Tr0U.js";import"./FieldDescription-UVUQlGhH.js";import"./Text-BBB4yGC-.js";import"./browser-B5YnOpHr.js";import"./EmulatedBoldText-B38Yfz1K.js";import"./Tooltip-BpXMmldY.js";import"./OverlayArrow-B-xht0if.js";import"./ProgressBar-Dobb74j3.js";import"./context-BhsUJEB9.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BS293wUk.js";import"./ReactAriaControlledValueFix-Dy_Ld-FZ.js";import"./ContextualHelpTrigger-Biyxe65c.js";import"./Popover-Db6Hc3ib.js";import"./DialogTriggerView-CRsA35wH.js";import"./context-BL-ZIP9s.js";import"./useStatic-DCDW6go-.js";import"./Dialog-MyAkaQuV.js";import"./Button-D6XrWsvH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BC_RRwfM.js";import"./RSPContexts-SSRv2tEc.js";import"./Collection-Bq_myMt6.js";import"./CollectionBuilder-DhC4o9GF.js";import"./Separator-D9zMzSnu.js";import"./SearchField-BM55Blft.js";import"./useEvent-62uCNpCU.js";import"./SelectionManager-DBvQYGX_.js";import"./useCollator-nLcbAmPr.js";import"./FocusScope-lVODcCJ_.js";import"./VisuallyHidden-DCu-7XPb.js";import"./Heading-CkWKlntd.js";import"./Heading-C5bxiFeF.js";import"./getActionGroupSlot-CbuIGg6y.js";import"./LoadingSpinner-ClEMvWD9.js";import"./react-children-utilities-D5bqwuZg.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
