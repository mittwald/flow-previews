import{r as M,j as r}from"./iframe-xY198WZi.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BUfvNtCD.js";import{L as P}from"./Label-BGqmtZoL.js";import{u as N,F as z,a as U}from"./Form-UTsUzj8a.js";import{s as Y}from"./Action-D1Re6xpB.js";import{B as h}from"./Button-Bwr0Tqpq.js";import{m as Z}from"./IconWarning-DKtpXb3v.js";import{C as G}from"./CopyButton-1e9GmGnc.js";import"./PropsContextProvider-Bcl1TdL7.js";import"./mergeRefs-C3ATilz7.js";import"./index-DUH-JGkU.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Dq9uru64.js";import"./utils-9eQBP1kk.js";import"./Text-Caf7sjAz.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-IN_qKSk9.js";import"./Hidden-CtG-gAWP.js";import"./useFocusRing-CNdh1loc.js";import"./useFocus-Dp6Kb8w7.js";import"./TextField-CNxjTF-I.js";import"./Form-Bh-UgxBm.js";import"./useLabel-EZ6qW8_W.js";import"./Label-Dcgw9TtS.js";import"./useTextField-Q2Y51r8y.js";import"./useFormReset-CwVzgzUX.js";import"./useControlledState-DwYELHJ7.js";import"./useFocusable-BEMuxCdm.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-D_bWmjSL.js";import"./FieldDescription-pTH8ocZo.js";import"./Text-sCeau28A.js";import"./browser-CoruqHMI.js";import"./EmulatedBoldText-D19FH_Aq.js";import"./Tooltip-Dbq7W_Mr.js";import"./OverlayArrow-J-8UDj7n.js";import"./ProgressBar-D8GoG1d0.js";import"./context-cbiqA6Ma.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CJ8Vq7It.js";import"./ReactAriaControlledValueFix-Dg0VmqhN.js";import"./ContextualHelpTrigger-BLBh34dr.js";import"./Popover-LfzPlCkT.js";import"./DialogTriggerView-CQH_y4wT.js";import"./context-DIL7reYg.js";import"./useStatic-BuBW5DuY.js";import"./Dialog-d75pDgMH.js";import"./Button-quH8-MSh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DyqoAsF-.js";import"./RSPContexts-CJJdSkVj.js";import"./Collection-ytNMUbYn.js";import"./CollectionBuilder-BIND5Hyl.js";import"./Separator-b4M5uB6E.js";import"./SearchField-cMs68yGv.js";import"./useEvent-B_ZLPh5h.js";import"./SelectionManager-DB1_71DO.js";import"./useCollator-CcxdQyrk.js";import"./FocusScope-DirxfVa-.js";import"./VisuallyHidden-vDoGSijP.js";import"./Heading-BYQW7yRQ.js";import"./Heading-CfyHXzT7.js";import"./getActionGroupSlot-rEXXQEwj.js";import"./LoadingSpinner-DDnO9vH9.js";import"./react-children-utilities-CPepyZJu.js";import"./onlyText-DNktQqQ7.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
