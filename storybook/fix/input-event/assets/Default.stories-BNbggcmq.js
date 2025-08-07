import{r as M,j as r}from"./iframe-Dykv-siI.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-BZzGzNqd.js";import{L as h}from"./Label-BoJDi_AO.js";import{u as N,F as z,a as U}from"./Form-BB06ej7A.js";import{s as Y}from"./Action-EDOdcPTi.js";import{B as u}from"./Button-BwJxl8P2.js";import{m as Z}from"./IconWarning-Dqgt16D-.js";import{C as G}from"./CopyButton-CVOjbGSf.js";import"./PropsContextProvider-Bor3EKSO.js";import"./mergeRefs-D4l15LMa.js";import"./index-CUyX81Vk.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-HMu3Fq7J.js";import"./utils-B-ceMMh2.js";import"./Text-CLEeB9ax.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CHnOtxCU.js";import"./Hidden-B1Iw_O48.js";import"./useFocusRing-BLIO3-Um.js";import"./useFocus-DT_Sim8A.js";import"./TextField-Cfy1I-0m.js";import"./Form-CjGGxOiW.js";import"./useLabel-Cl2tFDz1.js";import"./Label-DDTleg66.js";import"./useTextField-DP0W3nYG.js";import"./useFormReset-ceBz3BPo.js";import"./useControlledState-C0gMHLaR.js";import"./useFocusable-DsypMLKX.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-SIkWpDB2.js";import"./FieldDescription-1_-HcwJ2.js";import"./Text-D7_Ckqho.js";import"./browser-C-YjMasC.js";import"./EmulatedBoldText-CBoWsrrJ.js";import"./Tooltip-BgvETdWm.js";import"./OverlayArrow-NgM1lQd-.js";import"./ProgressBar-D9jVrFgv.js";import"./context-5SGg1gn7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CQJsBQBp.js";import"./ReactAriaControlledValueFix-CvPk5rFK.js";import"./ContextualHelpTrigger-C-Dkzpze.js";import"./Popover-BQ0foQBP.js";import"./DialogTriggerView-C3VJcWUc.js";import"./context-BIjwWtGw.js";import"./useStatic-DesXMpPQ.js";import"./Dialog-fv_y1U4K.js";import"./Button-BG4LaOh8.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-JMB6_eRB.js";import"./RSPContexts-D030pJdB.js";import"./Collection-DswZtzwx.js";import"./CollectionBuilder-BVax36LH.js";import"./Separator-CubwYYam.js";import"./SearchField-ZKNym0UI.js";import"./useEvent-qRsXeNBQ.js";import"./SelectionManager--KDKW3lV.js";import"./useCollator-BbJwwBb8.js";import"./FocusScope-BSi0CMVM.js";import"./VisuallyHidden-BglhDB6t.js";import"./Heading-CO9igaeZ.js";import"./Heading-CxkWtY7V.js";import"./getActionGroupSlot-BhsGjSHK.js";import"./LoadingSpinner-C6ucKsq_.js";import"./react-children-utilities-CsA5ziN8.js";import"./onlyText-B7pxPbMJ.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
