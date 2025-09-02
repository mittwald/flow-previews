import{r as M,j as r}from"./iframe-DzdsrO80.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-BWazbiHm.js";import{L as P}from"./Label-Bm3Js6Mn.js";import{u as N,F as z,a as U}from"./Form-BvaKwJX7.js";import{s as Y}from"./Action-Ba6ZxKlY.js";import{B as h}from"./Button-DVR7cX3i.js";import{m as Z}from"./IconWarning-B3m6OsdH.js";import{C as G}from"./CopyButton-BIx_VQlV.js";import"./PropsContextProvider-IX1SCoto.js";import"./mergeRefs-BURbbDf-.js";import"./index-Bdpzlu2x.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CeKpopQl.js";import"./utils-CvAakX2W.js";import"./Text-CRTGmFuV.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Cdr53w7M.js";import"./Hidden-BVbf7n1G.js";import"./useFocusRing-CBIzKb6Q.js";import"./useFocus-B0VC8u8k.js";import"./TextField-Cwc92i9-.js";import"./Form-C696dGLt.js";import"./useLabel-BtHrL8qq.js";import"./Label-DXfcpAFN.js";import"./useTextField-BarUssyk.js";import"./useFormReset-B7pkU5Xm.js";import"./useControlledState-D4aZ1p71.js";import"./useFocusable-COvMPAb3.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-_YRaGmgh.js";import"./FieldDescription-DFDjApG-.js";import"./Text-DXUL7YAG.js";import"./browser-CWHi4dia.js";import"./EmulatedBoldText-BUyeaD_Y.js";import"./Tooltip-BZhrS6Yt.js";import"./OverlayArrow-4JOsbCJv.js";import"./ProgressBar-LQ-fnBcd.js";import"./context-DCkzppns.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-B09vxeO2.js";import"./ReactAriaControlledValueFix-DN1EbRF2.js";import"./ContextualHelpTrigger-DPXNSXNG.js";import"./Popover-CZjnIXLF.js";import"./DialogTriggerView-BSpQgGle.js";import"./context-DKufrzCY.js";import"./useStatic-CzVMgagU.js";import"./Dialog-d3aXPnlF.js";import"./Button-BCqDIvjf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DskVbL7b.js";import"./RSPContexts-DgNZ7nRI.js";import"./Collection-C9A_LHc0.js";import"./CollectionBuilder-CaWr36HU.js";import"./Separator-CBpgeXgJ.js";import"./SearchField-C817Qgil.js";import"./useEvent-DVhg_FlY.js";import"./SelectionManager-CLk07rVx.js";import"./useCollator-B4_CrHfJ.js";import"./FocusScope-DDPGgWDg.js";import"./VisuallyHidden-BfQH1Q-z.js";import"./Heading-8JrpHVPd.js";import"./Heading-CPSS73-Z.js";import"./getActionGroupSlot-COrah7QA.js";import"./LoadingSpinner-PW_7_s64.js";import"./react-children-utilities-hAEZ0Lqf.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
