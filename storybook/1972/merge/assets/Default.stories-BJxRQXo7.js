import{r as M,j as r}from"./iframe-DSkJqBaJ.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BLEAW1EK.js";import{L as P}from"./Label-C19pMB8k.js";import{u as N,F as z,a as U}from"./Form-DL2mQqTy.js";import{s as Y}from"./Action-BQB4Vs5h.js";import{B as h}from"./Button-CDKKJ9Lp.js";import{m as Z}from"./IconWarning-CVH07XBs.js";import{C as G}from"./CopyButton-BOOqo5wF.js";import"./PropsContextProvider-DjRPgLoo.js";import"./mergeRefs-Z8wKoPrZ.js";import"./index-CL0qA5Bh.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-VY00PX4H.js";import"./utils-1-N0d2c9.js";import"./Text-BLRpFskM.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-3xm6Vzmn.js";import"./Hidden-4KMmbp7C.js";import"./useFocusRing-CxQcEY3i.js";import"./useFocus-G_FCb5od.js";import"./TextField-MvldIgrc.js";import"./Form--wHsDFUK.js";import"./useLabel-IHONIae1.js";import"./Label-C14Bap2a.js";import"./useTextField-D7V5JJBm.js";import"./useFormReset-Dcdsxz2S.js";import"./useControlledState-BYdmrjiu.js";import"./useFocusable-DnFOFct-.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BRJrB4yt.js";import"./FieldDescription-Bn1Apy-f.js";import"./Text-DEYyJHCZ.js";import"./browser-D8d4HdJF.js";import"./EmulatedBoldText-CY4h7UZj.js";import"./Tooltip-C4bTDnP3.js";import"./OverlayArrow-Bs3dimZg.js";import"./ProgressBar-CSEftjVr.js";import"./context-BGjjWy4a.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D8TjtXwl.js";import"./ReactAriaControlledValueFix-BPCvH6P0.js";import"./ContextualHelpTrigger-BbxuHbgY.js";import"./Popover-BMgBLYYV.js";import"./DialogTriggerView-BZLzPo95.js";import"./context-C-BSE4mB.js";import"./useStatic-B7cHRXbC.js";import"./Dialog-DxHA7eu_.js";import"./Button-D_WSnJ-T.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D7WkZjMs.js";import"./RSPContexts-DQKO52xl.js";import"./Collection-DAtUHX6x.js";import"./CollectionBuilder-BxVvMuh2.js";import"./Separator-CM2q7_wH.js";import"./SearchField-COlgHc0W.js";import"./useEvent-cDDpRPoS.js";import"./SelectionManager-B8u4m53M.js";import"./useCollator-DnEaXEjZ.js";import"./FocusScope-CsPDgYW_.js";import"./VisuallyHidden-BCoHKLFo.js";import"./Heading-C3BqIrHn.js";import"./Heading-1Ap11lE6.js";import"./getActionGroupSlot-I0QCsr-6.js";import"./LoadingSpinner-Cpke26nP.js";import"./react-children-utilities-DWi7dDnN.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
