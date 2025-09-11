import{r as M,j as r}from"./iframe-DvGStSYQ.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-JnUGJlyn.js";import{L as P}from"./Label-DhM8XMbl.js";import{u as N,F as z,a as U}from"./Form-BQbUUCzj.js";import{s as Y}from"./Action-BWXqzLSl.js";import{B as h}from"./Button-DjKTL3-y.js";import{m as Z}from"./IconWarning-PCMncW0h.js";import{C as G}from"./CopyButton-DE47lBXu.js";import"./PropsContextProvider-CQyMUqli.js";import"./mergeRefs-D5I-7zq8.js";import"./index-vxu4sbw1.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Cv8C3-Ec.js";import"./utils-BfKSOXmh.js";import"./Text-C8nQapVu.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BlAVBLoF.js";import"./Hidden-D8kwZn2S.js";import"./useFocusRing-ldGrbWty.js";import"./useFocus-Dk72H1bO.js";import"./TextField-DaGxzBCI.js";import"./Form-BeVzvFPG.js";import"./useLabel-pezwcoCn.js";import"./Label-BsSwZl9V.js";import"./useTextField-Su4XsVqq.js";import"./useFormReset-CpcIO9Ob.js";import"./useControlledState-BCrcM4bM.js";import"./useFocusable-51csEq1k.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BtrW-4IP.js";import"./FieldDescription-CHRa7vP-.js";import"./Text-aqY_knFC.js";import"./browser-B7JgWknh.js";import"./EmulatedBoldText-CaZEOFKE.js";import"./Tooltip-q1MTzPhm.js";import"./OverlayArrow-Cm-qLoTT.js";import"./ProgressBar-BElErXd2.js";import"./context-AtsIIwtl.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-B959dniX.js";import"./ReactAriaControlledValueFix-xbKZ8Gu8.js";import"./ContextualHelpTrigger-B4SBVYDA.js";import"./Popover-CSEwrymH.js";import"./DialogTriggerView-BbgRv1Oa.js";import"./context-Cq3VHa6C.js";import"./useStatic-DiIM3txy.js";import"./Dialog-CYVeUmsI.js";import"./Button-BSYAfZ7k.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-i0ws38c9.js";import"./RSPContexts-Dwdml_ht.js";import"./Collection-C-BG6Vrm.js";import"./CollectionBuilder-DHXYJDan.js";import"./Separator-dZEiMybe.js";import"./SearchField-BP1Cyyuc.js";import"./useEvent-P2zKSTCT.js";import"./SelectionManager-CRcC2iB_.js";import"./useCollator-CtQygjZr.js";import"./FocusScope-Dv52udGl.js";import"./VisuallyHidden-BQiIpSgJ.js";import"./Heading-CcAer-3o.js";import"./Heading-Cluu2882.js";import"./getActionGroupSlot-S1WVYHYX.js";import"./LoadingSpinner-KPhGKvxN.js";import"./react-children-utilities-C3pm5Lp_.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
