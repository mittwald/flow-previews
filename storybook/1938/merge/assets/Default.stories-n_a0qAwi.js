import{r as M,j as r}from"./iframe-CPSqmfOl.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-QY0iYj54.js";import{L as P}from"./Label-Cm39Oetk.js";import{u as N,F as z,a as U}from"./Form-Dl0GTn3r.js";import{s as Y}from"./Action-MbcV6Scy.js";import{B as h}from"./Button-hKWpSws2.js";import{m as Z}from"./IconWarning-Dz0_MR_L.js";import{C as G}from"./CopyButton-BJFIsDDi.js";import"./PropsContextProvider-BqWlcEyR.js";import"./mergeRefs-CG7T9kGm.js";import"./index-DVxNTjjY.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CM7w-aUX.js";import"./utils-Bp4pxj2u.js";import"./Text-BvvdQ7EK.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BmbgIKSk.js";import"./Hidden-CX2yRk0H.js";import"./useFocusRing-BjvWMKoG.js";import"./useFocus-BS8EzIP7.js";import"./TextField-nrw2PmZM.js";import"./Form-1yVZIEH7.js";import"./useLabel-BkGlbpXp.js";import"./Label-CnzzRGNK.js";import"./useTextField-Dv6BLFv4.js";import"./useFormReset-BUGG2d-X.js";import"./useControlledState-BlXvRNFY.js";import"./useFocusable-D7nBaAdw.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Cgj32YS9.js";import"./FieldDescription-BpkS0_Bc.js";import"./Text-CpNtEmk9.js";import"./browser-CHMWQ9uX.js";import"./EmulatedBoldText-CFRYqLao.js";import"./Tooltip-OPJF3yCJ.js";import"./OverlayArrow-Cn6JJnKz.js";import"./ProgressBar-BjfkTy0Q.js";import"./context-DzKnIoVi.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CCqX6hi3.js";import"./ReactAriaControlledValueFix-BlDC0iCZ.js";import"./ContextualHelpTrigger-CVBqwYe_.js";import"./Popover-8saljIIx.js";import"./DialogTriggerView-DhEtoXKf.js";import"./context-zgsQo9O-.js";import"./useStatic-OfVjkk_J.js";import"./Dialog-BRCyKDs6.js";import"./Button-e2WWi27E.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CIALPEwc.js";import"./RSPContexts-D2HT_eZz.js";import"./Collection-DIuPDF5B.js";import"./CollectionBuilder-SnC7X_3r.js";import"./Separator-R_OoFgiT.js";import"./SearchField-DIrZjnJq.js";import"./useEvent-COUAymzI.js";import"./SelectionManager-eBYaZCJQ.js";import"./useCollator-C37beSDK.js";import"./FocusScope-CjahwwK6.js";import"./VisuallyHidden-BiIsVZWt.js";import"./Heading-ChvCWS9D.js";import"./Heading-5KhJiSKA.js";import"./getActionGroupSlot-0Vq6hASS.js";import"./LoadingSpinner-DLNH37Uk.js";import"./react-children-utilities-DFJ7gp-D.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
