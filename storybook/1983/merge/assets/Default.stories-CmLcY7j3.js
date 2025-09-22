import{r as M,j as r}from"./iframe-CqLmdNeC.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-CxgRbNfd.js";import{L as P}from"./Label-B8Yu6jlZ.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-DHIFVkVp.js";import{s as Y}from"./Action-CeDhk6lc.js";import{B as h}from"./Button-Cck2R8d6.js";import{q as Z}from"./IconWarning-CMS0_eHL.js";import{C as G}from"./CopyButton-p48_gS-o.js";import"./dynamic-DFe3knzM.js";import"./PropsContextProvider-CftNG7hR.js";import"./mergeRefs-o29IfSv-.js";import"./index-DuAYVIUn.js";import"./clsx-B-dksMZM.js";import"./FieldError-BRlNdIVM.js";import"./utils-DVF3OaDc.js";import"./Text-BpEumjQQ.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DSZMysmZ.js";import"./Hidden-K4MIyCcS.js";import"./useFocusRing-B3V5UxLb.js";import"./useFocus-CLcOeBIv.js";import"./TextField-lXG7M95o.js";import"./Form-Dz9VUwD7.js";import"./useLabel-BygwjnmG.js";import"./Label-DbnvS1ga.js";import"./useTextField-CZX3v4eA.js";import"./useFormReset-6nvbbxGv.js";import"./useControlledState-Blr5WM8A.js";import"./useFocusable-zATjwRwW.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BPhKkw68.js";import"./FieldDescription-BURpBJIt.js";import"./Text-BZ3j-6fi.js";import"./browser-D8TwyJaY.js";import"./EmulatedBoldText-EL8QFNsm.js";import"./Tooltip-0fpLDFGx.js";import"./ClearPropsContextView-CGyUIuEX.js";import"./ProgressBar-Bc_l3bRQ.js";import"./context-DzYatHkR.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-C4FReXuX.js";import"./ReactAriaControlledValueFix-D-J3s3RX.js";import"./ContextualHelpTrigger-DCjjI_yK.js";import"./Popover-Cd3uYlMm.js";import"./DialogTriggerView-zx0O_dOm.js";import"./context-BV-Ks7Oh.js";import"./useStatic-suMR32Og.js";import"./Button-D6TKDn6h.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CKz354k3.js";import"./RSPContexts-BcXX2Wqq.js";import"./FocusScope-D6JShGuB.js";import"./useCollator-BJ0ATcQr.js";import"./VisuallyHidden-DFEHY8aA.js";import"./Collection-BtI4BBrq.js";import"./CollectionBuilder-BR0_mY_7.js";import"./Separator-Bx0e0X1l.js";import"./SearchField-Bt3pj5UO.js";import"./useEvent-CulDTTvx.js";import"./SelectionManager-mPjiaJaA.js";import"./Heading-GFbXOXKR.js";import"./Heading-B09eOgMp.js";import"./useManagedValue-BzwvcgIZ.js";import"./getActionGroupSlot-DLpPTNRU.js";import"./LoadingSpinner-CTcHqu9G.js";import"./react-children-utilities-PKIjV_6p.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
