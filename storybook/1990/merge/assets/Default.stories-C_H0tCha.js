import{r as M,j as r}from"./iframe-D_4x6qMj.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BRE9lUU2.js";import{L as P}from"./Label-DYejL5eD.js";import{u as N,F as z,a as U}from"./Form-D6PyxozE.js";import{s as Y}from"./Action-B-FwCqpK.js";import{B as h}from"./Button-CEOuDC8N.js";import{m as Z}from"./IconWarning-Dzi10vRl.js";import{C as G}from"./CopyButton-BGM3QfLs.js";import"./PropsContextProvider-CALK_gXH.js";import"./mergeRefs-D11WPw_n.js";import"./index-D_JTLils.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DwM-vJJl.js";import"./utils-xe5YSam6.js";import"./Text-Cu7PdI7W.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DiVNF80n.js";import"./Hidden-B0gkrfj6.js";import"./useFocusRing-TvNskxef.js";import"./useFocus-Drnb5e9K.js";import"./TextField-DSJ_5HB7.js";import"./Form-D0g69-ep.js";import"./useLabel-CiC867Ap.js";import"./Label-CCRaVzEI.js";import"./useTextField-U9hEKPZN.js";import"./useFormReset-Bck6lqok.js";import"./useControlledState-CYhMOmxg.js";import"./useFocusable-B8Ri4aea.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-B9c3ag_Q.js";import"./FieldDescription-CeF2d92u.js";import"./Text-CweuBtPf.js";import"./browser-CZBg7HNp.js";import"./EmulatedBoldText-B9kAgGNC.js";import"./Tooltip-ocfZLzDU.js";import"./OverlayArrow-CvQNm9iK.js";import"./ProgressBar-CJC6Hhu1.js";import"./context-DM98rbVc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BlYhncvt.js";import"./ReactAriaControlledValueFix-Co9Cp--Q.js";import"./ContextualHelpTrigger-CWWDfVoh.js";import"./Popover-BPV3PQ88.js";import"./DialogTriggerView-D7SWa1oN.js";import"./context-BMDWm5Qc.js";import"./useStatic-BjYYLPCu.js";import"./Dialog-DPQkTFHJ.js";import"./Button-CpmoBq4h.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C9nt0YbM.js";import"./RSPContexts-bNEpgRFQ.js";import"./Collection-CnzW5hBw.js";import"./CollectionBuilder-NsEnfSHY.js";import"./Separator-DqWrBJRs.js";import"./SearchField-FNUBcSFK.js";import"./useEvent-CxdF7c9o.js";import"./SelectionManager-Dt4Zb6ag.js";import"./useCollator-Bn9eJ8f5.js";import"./FocusScope-CncZTdzF.js";import"./VisuallyHidden-tZR9lL9G.js";import"./Heading-Vf-7-D82.js";import"./Heading-Dnp79pld.js";import"./getActionGroupSlot-NuufWXWm.js";import"./LoadingSpinner-YiUTGVQG.js";import"./react-children-utilities-1cy4y3-z.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
