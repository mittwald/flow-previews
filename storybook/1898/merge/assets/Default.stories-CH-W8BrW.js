import{r as M,j as r}from"./iframe-dcfCh18n.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-B-UEou7s.js";import{L as P}from"./Label-CuZ7LHL3.js";import{u as N,F as z,a as U}from"./Form-DkOIl7UI.js";import{s as Y}from"./Action-4w-CWFpf.js";import{B as h}from"./Button-Da273mbx.js";import{m as Z}from"./IconWarning-BWA_nqvd.js";import{C as G}from"./CopyButton-CeOpAh9g.js";import"./PropsContextProvider-CGfHC8WN.js";import"./mergeRefs-BuFcdMNh.js";import"./index-Dqpikgfu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-jHHw5TXz.js";import"./utils-CaaN6tMi.js";import"./Text-38QS6QcB.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-qqCya-sH.js";import"./Hidden-CnGKQwOV.js";import"./useFocusRing-kHWWBcyh.js";import"./useFocus-DiEh5oG5.js";import"./TextField-DqWSAtzr.js";import"./Form-k5YG3sGC.js";import"./useLabel-CpnVZyQW.js";import"./Label-DBNmmXrt.js";import"./useTextField-BUPKcxtd.js";import"./useFormReset-DV-dKI4G.js";import"./useControlledState-CjmCqi1H.js";import"./useFocusable-Cdnk8Kqp.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DGN7u_q3.js";import"./FieldDescription-CrQCJ9Lz.js";import"./Text-D7p3kvP7.js";import"./browser-D8aXoHXc.js";import"./EmulatedBoldText-De2JmDGd.js";import"./Tooltip-CC6x3Hfu.js";import"./OverlayArrow-NUC550dY.js";import"./ProgressBar-BcZD8tRU.js";import"./context-BfLqp0TH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CVOqiPV9.js";import"./ReactAriaControlledValueFix-Cfd6kJUL.js";import"./ContextualHelpTrigger-CyKeIz8U.js";import"./Popover-DYqV-DcI.js";import"./DialogTriggerView-BB_RmeFU.js";import"./context-TKpdQxdP.js";import"./useStatic-Dqwqzi-C.js";import"./Dialog-DLMrif4z.js";import"./Button-D8qJizcb.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BgO5jEhv.js";import"./RSPContexts-W4MNUJhM.js";import"./Collection-DEoan4F0.js";import"./CollectionBuilder-WRzFhLbw.js";import"./Separator-DQZuDVMG.js";import"./SearchField-DOB9WtIS.js";import"./useEvent-9GQqu5so.js";import"./SelectionManager-BtQR7swA.js";import"./useCollator-DK-_TAlj.js";import"./FocusScope-BOAHQoFR.js";import"./VisuallyHidden-7QHbeduJ.js";import"./Heading-D8gQrocA.js";import"./Heading-DaCQBB00.js";import"./getActionGroupSlot-DfUfHthN.js";import"./LoadingSpinner-Bo6_-KdV.js";import"./react-children-utilities-DRQ2iSho.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
