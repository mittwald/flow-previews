import{r as M,j as r}from"./iframe-Bcy3WBLD.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-387SmZ54.js";import{L as P}from"./Label-BjUMecpn.js";import{u as N,F as z,a as U}from"./Form-BkZmVn28.js";import{s as Y}from"./Action-CzlrQ86v.js";import{B as h}from"./Button-D1gTYi2b.js";import{m as Z}from"./IconWarning-Vd06CvkA.js";import{C as G}from"./CopyButton-D5DAkXqu.js";import"./PropsContextProvider-BHhLw24a.js";import"./mergeRefs--VvJilNx.js";import"./index-DVYl39IU.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-l-G1_SjF.js";import"./utils-DWRY5rRS.js";import"./Text-B9FmTM8Z.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CKjDXA5J.js";import"./Hidden-Dv6inJmm.js";import"./useFocusRing-C3pUQ5cb.js";import"./useFocus-Dgw0vV32.js";import"./TextField-OZ5xDcTU.js";import"./Form-PJgehRtv.js";import"./useLabel-DJG08svr.js";import"./Label-mUSxsxBX.js";import"./useTextField-KFIXFoXA.js";import"./useFormReset-COOu3OXz.js";import"./useControlledState-gINmRHbE.js";import"./useFocusable-C_MY2EQ_.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-ZqRA8FAO.js";import"./FieldDescription-D_fUztDn.js";import"./Text-BKZvU2Ep.js";import"./browser-CGdqZmLM.js";import"./EmulatedBoldText-LLb9cW4a.js";import"./Tooltip-1LFEh6rt.js";import"./OverlayArrow-C5shyw1z.js";import"./ProgressBar-DOzZ26z9.js";import"./context-COJrQ54s.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DL2ol0cr.js";import"./ReactAriaControlledValueFix-CPjTj3b4.js";import"./ContextualHelpTrigger-Cl5CDXj5.js";import"./Popover-BBFOwcYX.js";import"./DialogTriggerView-txSV1TrO.js";import"./context-BOV0Rbpo.js";import"./useStatic-D4VOD2iQ.js";import"./Dialog-D3iEa7Qs.js";import"./Button-j-dhdB0v.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CA9PIUpq.js";import"./RSPContexts-Bts87vXR.js";import"./Collection-CRHqEzPy.js";import"./CollectionBuilder-BpdNBb0a.js";import"./Separator-BMBwVh1p.js";import"./SearchField-uTJdbFFf.js";import"./useEvent-Bt8sVsIM.js";import"./SelectionManager-VjBSS0Z5.js";import"./useCollator-sTarHb1o.js";import"./FocusScope-DTvTpHKs.js";import"./VisuallyHidden-B7epvPUM.js";import"./Heading-ClpaIzsq.js";import"./Heading-DjN4O-Uz.js";import"./getActionGroupSlot-C7hTmbc4.js";import"./LoadingSpinner-CH6ajn32.js";import"./react-children-utilities-C-C_G16Q.js";import"./onlyText-DWMvFkkK.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
