import{r as M,j as r}from"./iframe-ChOLfm48.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-Bja6polU.js";import{L as P}from"./Label-BjFpMJsX.js";import{u as N,F as z,a as U}from"./Form-llde_5mB.js";import{s as Y}from"./Action-mjOEx1pm.js";import{B as h}from"./Button-B4rVmYfF.js";import{m as Z}from"./IconWarning-BSUZvRGT.js";import{C as G}from"./CopyButton-D2NfJSQ5.js";import"./PropsContextProvider-bWieavHe.js";import"./mergeRefs-B21zPNPU.js";import"./index-GRCPXwug.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-JlwACqz9.js";import"./utils-YDvgcPpP.js";import"./Text-Sl4cdtSO.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DfdPT8Gy.js";import"./Hidden-DmBctQal.js";import"./useFocusRing-DPdWCN0f.js";import"./useFocus-DMe4XyoT.js";import"./TextField-BNJiEHR6.js";import"./Form-CA_oHzJs.js";import"./useLabel-CsHZNL1P.js";import"./Label-DXrtAbBw.js";import"./useTextField-DWlRW7Y8.js";import"./useFormReset-2KspnF8x.js";import"./useControlledState-Dmz-xjYt.js";import"./useFocusable-B1fc-Qnz.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CTDQW1k7.js";import"./FieldDescription-Cz-rb68x.js";import"./Text-C5EipuV_.js";import"./browser-DWi47IAH.js";import"./EmulatedBoldText-DdFIKcy_.js";import"./Tooltip-DngnhKJQ.js";import"./OverlayArrow-PXUzuxoY.js";import"./ProgressBar-C09E4iv2.js";import"./context-DA6DtsVb.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-k197sm3v.js";import"./ReactAriaControlledValueFix-IRsm_-kd.js";import"./ContextualHelpTrigger-B5u23xKd.js";import"./Popover-C-SsS0OD.js";import"./DialogTriggerView-D5enS8PQ.js";import"./context-CLjENUX9.js";import"./useStatic-ZU4u6g9v.js";import"./Dialog-LDu6X4iJ.js";import"./Button-BHJ4uNPj.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CNl9HBfO.js";import"./RSPContexts-C8KeXTpg.js";import"./Collection-BYYSTjrH.js";import"./CollectionBuilder-BFso7U7_.js";import"./Separator-DEQT6UbO.js";import"./SearchField-CiSMqBGJ.js";import"./useEvent-BFXA3T9F.js";import"./SelectionManager-CQRDuBDt.js";import"./useCollator-BSIYhoOJ.js";import"./FocusScope-DwqEaNE4.js";import"./VisuallyHidden-eytsr0lz.js";import"./Heading-BOvfWU_Z.js";import"./Heading-GN5MY3Gv.js";import"./getActionGroupSlot-BFZbab6X.js";import"./LoadingSpinner-CVKVUr-K.js";import"./react-children-utilities-DT0VPfiG.js";import"./onlyText-DN62k4Pk.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
