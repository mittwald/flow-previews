import{r as M,j as r}from"./iframe-DoW4S5y5.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-DtV1o1Ui.js";import{L as P}from"./Label-DBV8eSx5.js";import{u as N,F as z,a as U}from"./Form-B2XAsLmK.js";import{s as Y}from"./Action-CvPFBQ3X.js";import{B as h}from"./Button-CJ9GVWSA.js";import{m as Z}from"./IconWarning-1bSGr7bL.js";import{C as G}from"./CopyButton-D4kvV7nQ.js";import"./PropsContextProvider-BqGtFlt4.js";import"./mergeRefs-Ka_JxYbf.js";import"./index-ywv6zfVU.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DdRlRixc.js";import"./utils-BERKyAtu.js";import"./Text-C09El9xQ.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BtU7cQ2J.js";import"./Hidden-DdNFa5_a.js";import"./useFocusRing-B5qgIIvG.js";import"./useFocus-CTercWxn.js";import"./TextField-DHHX1OVE.js";import"./Form-1DUWHykH.js";import"./useLabel-xAN8HAzj.js";import"./Label-BiPavfPM.js";import"./useTextField-DmJTXkvZ.js";import"./useFormReset-DRCEBnHw.js";import"./useControlledState-DwXivsGS.js";import"./useFocusable-Caaze2NE.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BGjDwda8.js";import"./FieldDescription-vuheHveA.js";import"./Text-BWWLLA_C.js";import"./browser-1Svz-vih.js";import"./EmulatedBoldText-88Z3nw3V.js";import"./Tooltip-CUrDAtCF.js";import"./OverlayArrow-Cnmawvtl.js";import"./ProgressBar-Cw6ko2xq.js";import"./context-DLINqX3o.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-C5IBRtX2.js";import"./ReactAriaControlledValueFix-Kh9o9KHu.js";import"./ContextualHelpTrigger-DRwGHpFt.js";import"./Popover-DjXoYR6o.js";import"./DialogTriggerView-Cc9fs5Ki.js";import"./context-Ex8JCHDm.js";import"./useStatic-CyJ13LoA.js";import"./Dialog-BNyqjTo3.js";import"./Button-DnWzyqBm.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BTQEKaY-.js";import"./RSPContexts-BR0kwtoC.js";import"./Collection-Bm_qpX5D.js";import"./CollectionBuilder-zDP_AyQT.js";import"./Separator-B7bt-k6s.js";import"./SearchField-BenY0OV9.js";import"./useEvent-rS73qyHD.js";import"./SelectionManager-B1xZchnP.js";import"./useCollator-CKm8HelV.js";import"./FocusScope-C1si8CoR.js";import"./VisuallyHidden-BKF9ViHg.js";import"./Heading-Dt1Rqblk.js";import"./Heading-BpcFR_NP.js";import"./getActionGroupSlot-C-O0F5Jp.js";import"./LoadingSpinner-C4oFajCL.js";import"./react-children-utilities-XBa3sz5_.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
