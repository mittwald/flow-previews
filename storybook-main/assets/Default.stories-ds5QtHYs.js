import{r as M,j as r}from"./iframe-Czve8Ng1.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-BmFjTgax.js";import{L as h}from"./Label-FUFGZTqe.js";import{u as N,F as z,a as U}from"./Form-DPdhl0qo.js";import{s as Y}from"./Action-B4jn1mWw.js";import{B as u}from"./Button-D73APsNA.js";import{m as Z}from"./IconWarning-YJtY_uKm.js";import{C as G}from"./CopyButton-B2rGAe7N.js";import"./PropsContextProvider-DLHfSyo1.js";import"./mergeRefs-BkScJl_E.js";import"./index-SeEX-dzh.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CNai_82t.js";import"./utils-C85tsJLi.js";import"./Text-xUaxq5aV.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-D_IbuD73.js";import"./Hidden-B3217TUg.js";import"./useFocusRing-Bu3hVrpu.js";import"./useFocus-DLNoddQ5.js";import"./TextField-IalWcoDx.js";import"./Form-B2b0RBd7.js";import"./useLabel-BFN45BzM.js";import"./Label-BfVvFZj4.js";import"./useTextField-l00Z-hVA.js";import"./useFormReset-BM4kigyU.js";import"./useControlledState-BeXkP8kb.js";import"./useFocusable-DPi5-Rks.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-JfKFDbH2.js";import"./FieldDescription-6iurUfiv.js";import"./Text-CMgn7hJq.js";import"./browser-C659BIXC.js";import"./EmulatedBoldText-CYlQsTFY.js";import"./Tooltip-CO4svGko.js";import"./OverlayArrow-DAtBTKTJ.js";import"./ProgressBar-CQMCSPa7.js";import"./context-D03EQw3p.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-uQUw7qmu.js";import"./ReactAriaControlledValueFix-C6r6_Iq3.js";import"./ContextualHelpTrigger-CP5mMIhh.js";import"./Popover-DPRW9Y1r.js";import"./DialogTriggerView-7b1_XXj3.js";import"./context-CNefDW5h.js";import"./useStatic-CzYWXmZ1.js";import"./Dialog-DRA529j2.js";import"./Button-Cis11iQd.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-8K4_ozuW.js";import"./RSPContexts-dpque2BF.js";import"./Collection-CSylHNqr.js";import"./CollectionBuilder-Dt6aii9k.js";import"./Separator-C90j9JiE.js";import"./SearchField-C86J2fE8.js";import"./useEvent-CJyM_iko.js";import"./SelectionManager-BrCB2ldz.js";import"./useCollator-Bl41TtO8.js";import"./FocusScope-Cg_D6BEH.js";import"./VisuallyHidden-DTvv8wPC.js";import"./Heading-Dip8hB8T.js";import"./Heading-DFvLozNS.js";import"./getActionGroupSlot-DCBGN5KI.js";import"./LoadingSpinner-B0jtDNpX.js";import"./react-children-utilities-C7rv1JIH.js";import"./onlyText-6w26WevO.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
