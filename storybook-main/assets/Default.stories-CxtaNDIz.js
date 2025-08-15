import{r as M,j as r}from"./iframe-Cnqm4lFy.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-DbqoseFH.js";import{L as P}from"./Label-DI5vbAp_.js";import{u as N,F as z,a as U}from"./Form-D5anfSgp.js";import{s as Y}from"./Action-D5xue7JO.js";import{B as h}from"./Button-GqX5Ed_0.js";import{m as Z}from"./IconWarning-BGJHeHvx.js";import{C as G}from"./CopyButton-CafdCeIp.js";import"./PropsContextProvider-BxdbS27a.js";import"./mergeRefs-8x0kH2T_.js";import"./index-CsHwvL4C.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CjkOwEOv.js";import"./utils-CnzLW3AP.js";import"./Text-CzkkWfVE.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DTUadKgc.js";import"./Hidden-Cs157XWu.js";import"./useFocusRing-CPUfygMd.js";import"./useFocus-_F3heiAA.js";import"./TextField-EAqwucdm.js";import"./Form-BSD4Q5fC.js";import"./useLabel-BaQUBcK6.js";import"./Label-DR_AMUCZ.js";import"./useTextField-C6ieJdik.js";import"./useFormReset-eFY2_Wll.js";import"./useControlledState-BaDEj8YE.js";import"./useFocusable-BzgCWsb7.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BShtxMou.js";import"./FieldDescription-B9zcA8Q-.js";import"./Text-BEWqZmc4.js";import"./browser-B2d62Nc4.js";import"./EmulatedBoldText-DcBlvLGt.js";import"./Tooltip-Bix89QFh.js";import"./OverlayArrow-BzYR1xCl.js";import"./ProgressBar-DvnI1q4y.js";import"./context-CV4GK-7T.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CQJQXq27.js";import"./ReactAriaControlledValueFix-D3vmDBN2.js";import"./ContextualHelpTrigger-DKq5IRsA.js";import"./Popover-CSuX_gIS.js";import"./DialogTriggerView-DiXTTJbN.js";import"./context-p0am_T1z.js";import"./useStatic-Gr7dtALz.js";import"./Dialog-B5ExOuoq.js";import"./Button-IuJiQec9.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DsDytGfO.js";import"./RSPContexts-D_hI6riA.js";import"./Collection-FQ9k0Rtz.js";import"./CollectionBuilder-BxLrnRW8.js";import"./Separator-LafJE-2b.js";import"./SearchField-3la4eIFC.js";import"./useEvent-D6x-_Zc1.js";import"./SelectionManager-ByPZOqoP.js";import"./useCollator-BSKS0jpr.js";import"./FocusScope-BkqoV2HT.js";import"./VisuallyHidden-CPCVsxvc.js";import"./Heading-CJFTySQe.js";import"./Heading-BHukavFk.js";import"./getActionGroupSlot-CCVLKGat.js";import"./LoadingSpinner-Bfw-PGOT.js";import"./react-children-utilities-BnKEfx--.js";import"./onlyText-v84BZdF-.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
