import{r as M,j as r}from"./iframe-d9P-aV0W.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-DENXvQoS.js";import{L as P}from"./Label-Bkj4txtc.js";import{u as N,F as z,a as U}from"./Form-BskI9iRZ.js";import{s as Y}from"./Action-DTIHrutw.js";import{B as h}from"./Button-B1lQe4CG.js";import{m as Z}from"./IconWarning-BjZlRYlZ.js";import{C as G}from"./CopyButton-CcL04kD5.js";import"./PropsContextProvider-COJEgxrC.js";import"./mergeRefs-COfeY-J9.js";import"./index-DNfeWXBl.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DZyu-lh_.js";import"./utils-D3Cd9kCb.js";import"./Text-D1KGOeak.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DNqxyc_c.js";import"./Hidden-ATL9oYS4.js";import"./useFocusRing-CufwTJs4.js";import"./useFocus-Db-Axcue.js";import"./TextField-CBm_F67z.js";import"./Form-D0Rr0MG7.js";import"./useLabel-DJC774kJ.js";import"./Label-Dkt1SH7U.js";import"./useTextField-BsPcuE2q.js";import"./useFormReset-BRhy_R9s.js";import"./useControlledState-CiRgye4r.js";import"./useFocusable-CU14CpV2.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Bx3miAuV.js";import"./FieldDescription-DYuYYPeA.js";import"./Text-Be7zee3C.js";import"./browser-7zjo9sS-.js";import"./EmulatedBoldText-DaFZXsc7.js";import"./Tooltip-DwH_tEDd.js";import"./OverlayArrow-Cjv7HVcg.js";import"./ProgressBar-Sdd768YE.js";import"./context-3d2O_dpD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BD0NOEPb.js";import"./ReactAriaControlledValueFix-CSqsGOKF.js";import"./ContextualHelpTrigger-jVNBnfPk.js";import"./Popover-DPVZXXeh.js";import"./DialogTriggerView-FP1ivMgD.js";import"./context-DNdMdfyQ.js";import"./useStatic-BCruP98g.js";import"./Dialog-e74qD_EA.js";import"./Button-DwY3a-D1.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CdPHlHdZ.js";import"./RSPContexts-CIfamJXM.js";import"./Collection-CdCCPlVo.js";import"./CollectionBuilder-DsV7XKjH.js";import"./Separator-p90sXtPP.js";import"./SearchField-CGJ3SG_G.js";import"./useEvent-BUfOZTC1.js";import"./SelectionManager-CdLcEL5b.js";import"./useCollator-D1fE0zhK.js";import"./FocusScope-Bqouiiv6.js";import"./VisuallyHidden-D6ugaIjO.js";import"./Heading-1328N8LH.js";import"./Heading-DqhKHwH3.js";import"./getActionGroupSlot-CwmqcSpm.js";import"./LoadingSpinner-BMYPjKuf.js";import"./react-children-utilities-BlCwl_YJ.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
