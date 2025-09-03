import{r as M,j as r}from"./iframe-fiZAYE2W.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-tw1mhhrX.js";import{L as P}from"./Label-CJVysa3_.js";import{u as N,F as z,a as U}from"./Form-mIoIjNp2.js";import{s as Y}from"./Action-ZUtpVKh5.js";import{B as h}from"./Button-CPh6A0ie.js";import{m as Z}from"./IconWarning-CB_niWR5.js";import{C as G}from"./CopyButton-CofWmr6F.js";import"./PropsContextProvider-DiYt5N9g.js";import"./mergeRefs-DAMFNCwk.js";import"./index-DAzd7Laa.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DfP4BUoL.js";import"./utils-sHGDZ6Zl.js";import"./Text-H6cA9zz3.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BCt9JR72.js";import"./Hidden-l1NKNxky.js";import"./useFocusRing-B57qzYJa.js";import"./useFocus-Bwj4tK_H.js";import"./TextField-qcgW8owJ.js";import"./Form-BAG0Y1U9.js";import"./useLabel-8IHfk19G.js";import"./Label-DQZrVrfW.js";import"./useTextField-CbBTT6Wa.js";import"./useFormReset-Du9grFIi.js";import"./useControlledState-Dazdo7hG.js";import"./useFocusable-DMthjPSk.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BJomx8YB.js";import"./FieldDescription-1eJT4cNk.js";import"./Text-BgnbdcU8.js";import"./browser-BJ9bzP1_.js";import"./EmulatedBoldText-DpM_ny8g.js";import"./Tooltip-CB2LjFt5.js";import"./OverlayArrow-CoJAbzkc.js";import"./ProgressBar-Bh9iJ1Tb.js";import"./context-0IVozT_C.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Dvod7aWF.js";import"./ReactAriaControlledValueFix-tT24bbyp.js";import"./ContextualHelpTrigger-D7ezan05.js";import"./Popover-CAMcFRes.js";import"./DialogTriggerView-D_9nk-w4.js";import"./context-BP9RYxVP.js";import"./useStatic-DK8KGoVH.js";import"./Dialog-CPiJaMak.js";import"./Button-DkSlR_xh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-j57SM-Nw.js";import"./RSPContexts-DEEb3C3L.js";import"./Collection-BspUYjq1.js";import"./CollectionBuilder-DSqxmXm5.js";import"./Separator-DZKWjpX6.js";import"./SearchField-CnjX_-ia.js";import"./useEvent-BY_cGdFt.js";import"./SelectionManager-F5TK6880.js";import"./useCollator-BdIY4eGy.js";import"./FocusScope-BzxFGsrZ.js";import"./VisuallyHidden-Dzs1b7hj.js";import"./Heading-MqLGOtOs.js";import"./Heading-D6rS-Kxf.js";import"./getActionGroupSlot-BXjTWZDP.js";import"./LoadingSpinner-CBRkZ3k2.js";import"./react-children-utilities-CAuBZeI2.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
