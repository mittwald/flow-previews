import{r as M,j as r}from"./iframe-DIlFkKfe.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-D6kvzCR_.js";import{L as P}from"./Label-BSjWh_q0.js";import{u as N,F as z,a as U}from"./Form-B2OQdXzw.js";import{s as Y}from"./Action-R0JS_3NZ.js";import{B as h}from"./Button-BvaN7Y-D.js";import{m as Z}from"./IconWarning-BS6-kuBv.js";import{C as G}from"./CopyButton-BO7CclDk.js";import"./PropsContextProvider-DpgT95xr.js";import"./mergeRefs-TbbaDpSF.js";import"./index-DOnHcB6O.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-5aNzky8T.js";import"./utils-E_0WoXkF.js";import"./Text-DuUlrCBa.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CabJqO_k.js";import"./Hidden-b1169DFL.js";import"./useFocusRing-VlAoxJyj.js";import"./useFocus-CiEitWNM.js";import"./TextField-BSCkD-qq.js";import"./Form-HyfIN8sB.js";import"./useLabel-BtXixU_d.js";import"./Label-op2mctQl.js";import"./useTextField-Bo95H554.js";import"./useFormReset-BM0i_QS2.js";import"./useControlledState-CWVlWyPG.js";import"./useFocusable-BKL1JWl8.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-D7S_o8t1.js";import"./FieldDescription-s_Lc-ZQl.js";import"./Text-CG4Ucl9p.js";import"./browser-CN7RW_LC.js";import"./EmulatedBoldText-hH9OpyJt.js";import"./Tooltip-ONW80TkE.js";import"./OverlayArrow-C5Az4zJe.js";import"./ProgressBar-CN0cToBP.js";import"./context-BIl-kujG.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-C2YSpIsm.js";import"./ReactAriaControlledValueFix-OIaBx3G8.js";import"./ContextualHelpTrigger-9-ALuKa_.js";import"./Popover-BX6fBO3O.js";import"./DialogTriggerView-B86hnYR6.js";import"./context-SLpiSpKp.js";import"./useStatic-D-gec7Hx.js";import"./Dialog-CjLiSQnW.js";import"./Button-pHXSBUAI.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D9JeOi6r.js";import"./RSPContexts-BFg1cs6H.js";import"./Collection-BBECU8Th.js";import"./CollectionBuilder-Dgy9FRg7.js";import"./Separator-BYxoqALx.js";import"./SearchField-BU427pXg.js";import"./useEvent-BZtMxgrD.js";import"./SelectionManager-_Z7bs6df.js";import"./useCollator-CcgJo-Oq.js";import"./FocusScope-C9n1sP7L.js";import"./VisuallyHidden-DzVxkJhT.js";import"./Heading-CxdU82fh.js";import"./Heading-uk9khgL8.js";import"./getActionGroupSlot-I5c5cWG6.js";import"./LoadingSpinner-wlCv7fWm.js";import"./react-children-utilities-Da520Ouy.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
