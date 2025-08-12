import{r as M,j as r}from"./iframe-BDw0JWSR.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-CL1U_Ms6.js";import{L as h}from"./Label-Be_-w5vU.js";import{u as N,F as z,a as U}from"./Form-BDovRbyw.js";import{s as Y}from"./Action-BixN79Ov.js";import{B as u}from"./Button-yu20EEPl.js";import{m as Z}from"./IconWarning-C4ko8TBx.js";import{C as G}from"./CopyButton-D7YEw51T.js";import"./PropsContextProvider-BlgeDM1_.js";import"./mergeRefs-C1Ne00pv.js";import"./index-DchPcGun.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-ByToyRq3.js";import"./utils-D_w6CRD2.js";import"./Text-DEFEolTP.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CKyiWQ2U.js";import"./Hidden-pH7w6Mtj.js";import"./useFocusRing-52GqPzGX.js";import"./useFocus-Dj2Ek65f.js";import"./TextField-DXLuZ0kd.js";import"./Form-Q2KPI748.js";import"./useLabel-C5kEgDfJ.js";import"./Label-CUqrwqQ8.js";import"./useTextField-qrm6HsnU.js";import"./useFormReset-JMYigv_3.js";import"./useControlledState-Cvl_BVXS.js";import"./useFocusable-D3-cRXek.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-D-ArndZL.js";import"./FieldDescription-CKlNthzu.js";import"./Text-BXVMRRcn.js";import"./browser-BofL4XsS.js";import"./EmulatedBoldText-BcRlLsEq.js";import"./Tooltip-DpIR3sOY.js";import"./OverlayArrow-CwRuRLsS.js";import"./ProgressBar-CyYOn_uf.js";import"./context-D5nQNM7t.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CacwBwR0.js";import"./ReactAriaControlledValueFix-DtrCAPIs.js";import"./ContextualHelpTrigger-DxQ_XQBi.js";import"./Popover-BDeGicz_.js";import"./DialogTriggerView-5dEI7enB.js";import"./context-DDduvggu.js";import"./useStatic-D7eirymu.js";import"./Dialog-D8b2kpaQ.js";import"./Button-lKZFx-Lr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BNZPQqcG.js";import"./RSPContexts-0zkktiyR.js";import"./Collection-DDNNYOGK.js";import"./CollectionBuilder-DuESWRb0.js";import"./Separator-Cydo87Fk.js";import"./SearchField-DqNeviEu.js";import"./useEvent-Cw4Az-S_.js";import"./SelectionManager-CoRWAbK4.js";import"./useCollator-DLoPjsqn.js";import"./FocusScope-CC9BsQaO.js";import"./VisuallyHidden-BSZ5GesV.js";import"./Heading--VU7n6P6.js";import"./Heading-DfvBFGtB.js";import"./getActionGroupSlot-CeAfv5DI.js";import"./LoadingSpinner-CFe72iUG.js";import"./react-children-utilities-D-GF2jXX.js";import"./onlyText-DfVp7Vc5.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var R,v,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(L=(v=l.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var T,W,q;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var _,O,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,de as __namedExportsOrder,le as default};
