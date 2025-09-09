import{r as M,j as r}from"./iframe-ybIflQI0.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-DxeCoRVn.js";import{L as P}from"./Label-D6VCnmf_.js";import{u as N,F as z,a as U}from"./Form-B4smknOt.js";import{s as Y}from"./Action-CNi-ghwN.js";import{B as h}from"./Button-VpIHCJ_t.js";import{m as Z}from"./IconWarning-4calfh7J.js";import{C as G}from"./CopyButton-DQip5Jd3.js";import"./PropsContextProvider-Dby21Boo.js";import"./mergeRefs-CrLlo2X9.js";import"./index-DwvqtJ63.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-C5asJdTF.js";import"./utils-DwLBuKNl.js";import"./Text-BtP71xLD.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-vP_Qg5M8.js";import"./Hidden-DQD7tqWN.js";import"./useFocusRing-DmeoHCon.js";import"./useFocus-FOKKrJ32.js";import"./TextField--sxCbEe1.js";import"./Form-CSA4Adn7.js";import"./useLabel-OuLiew89.js";import"./Label-dqzpDUen.js";import"./useTextField-ClpDCKui.js";import"./useFormReset-B-8-_0w7.js";import"./useControlledState-BVmYQtS6.js";import"./useFocusable-D9slAbEH.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-NwAdK0dF.js";import"./FieldDescription-DnwWH4Ws.js";import"./Text-CrQihJYy.js";import"./browser-BlU6H4Cg.js";import"./EmulatedBoldText-Cg6573Jk.js";import"./Tooltip-CO4ZYKPT.js";import"./OverlayArrow-D5ITEh8W.js";import"./ProgressBar-BI13LgYi.js";import"./context-D69S0q1x.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Dy9YCgnm.js";import"./ReactAriaControlledValueFix-BANhqdAH.js";import"./ContextualHelpTrigger-BztlA2LR.js";import"./Popover-Ck6kog5-.js";import"./DialogTriggerView-B2JbNUMV.js";import"./context-cR8QzHfh.js";import"./useStatic-CBdef3Wq.js";import"./Dialog-sjXOwmAJ.js";import"./Button-Bsxotqki.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BBpVmfp-.js";import"./RSPContexts-18Yw4rTl.js";import"./Collection-BzQkilIm.js";import"./CollectionBuilder-CIbJownJ.js";import"./Separator-DelM8Vlp.js";import"./SearchField-CmuGphBb.js";import"./useEvent-BtRl6L9d.js";import"./SelectionManager-BKQdldWX.js";import"./useCollator-D-IRcrcA.js";import"./FocusScope-Ogf1gBEU.js";import"./VisuallyHidden-DZp-AQjS.js";import"./Heading-D42xUANC.js";import"./Heading-D-wBWx4k.js";import"./getActionGroupSlot-CImKUmyK.js";import"./LoadingSpinner-DYvsivqr.js";import"./react-children-utilities-ChBQYGyG.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
