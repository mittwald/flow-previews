import{r as M,j as r}from"./iframe-DycaE4yP.js";import{d as I,e as U,P as a,U as k,n as s,r as A}from"./PasswordCreationField-DiRwetTl.js";import{L as h}from"./Label-BhJAUeA3.js";import{u as K,F as N,a as z}from"./Form-BkDchlg1.js";import{s as Y}from"./Action-C2FublHi.js";import{B as u}from"./Button-BWHwfPz8.js";import{m as Z}from"./IconWarning-CT1lcMza.js";import{C as G}from"./CopyButton-DBCB27rM.js";import"./PropsContextProvider-K6I7evOF.js";import"./mergeRefs-DRF5sLLW.js";import"./index-DZjp0r4-.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BPjBaqMq.js";import"./utils-BKIW_WGl.js";import"./Text-Co__d8QG.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-KDDOI2Xy.js";import"./Hidden-BOdEkm3m.js";import"./useFocusRing-DwXXK7Ot.js";import"./useFocus-V6VDc_9L.js";import"./TextField-CUQT97wD.js";import"./Form-BeDIwDDj.js";import"./useLabel-Dwjvyt4X.js";import"./Label-BzQKezRD.js";import"./useTextField-B1Jeh3_Y.js";import"./useFormReset-CJg24Tdt.js";import"./useControlledState-Do7JB9n2.js";import"./useFocusable-kod0IUYw.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DPl0RnJm.js";import"./FieldDescription-CcXqJ_lS.js";import"./Text-D7PtYJH6.js";import"./browser-BH60Xdrt.js";import"./EmulatedBoldText-BQ7yahrw.js";import"./Tooltip-BzF02Jps.js";import"./OverlayArrow-PE1jPlIu.js";import"./ProgressBar-B6sVEMf9.js";import"./context-CtP3BLUn.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D4Reb_cV.js";import"./ReactAriaControlledValueFix-snfcoxQ5.js";import"./ContextualHelpTrigger-CqFtXbsU.js";import"./Popover-_m3qz08e.js";import"./DialogTriggerView-OJkhRApQ.js";import"./context-D9a_udGZ.js";import"./useStatic-CVcbCwvf.js";import"./Dialog-C2wfDSZ9.js";import"./Button-YH6NiS1R.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bp56TFyM.js";import"./RSPContexts-CBFW3KNe.js";import"./Collection-CWz6U0aO.js";import"./CollectionBuilder-CrmAPeoT.js";import"./Separator-Co3J7Hys.js";import"./SearchField-B79VrsM9.js";import"./useEvent-BR-ARNpt.js";import"./SelectionManager-D8Ui2ebE.js";import"./useCollator-CouMmKeo.js";import"./FocusScope-DfGH1q4v.js";import"./VisuallyHidden-BS8Lf4nY.js";import"./Heading-Bs9zq3fb.js";import"./Heading-CdNZK74X.js";import"./getActionGroupSlot-D0R13xpG.js";import"./LoadingSpinner-DrmlO1GU.js";import"./react-children-utilities-BtRvlkJk.js";import"./onlyText-DQOwEUQI.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return U(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[A.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=k.fromDeclaration(J),o=K({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(z,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var v,L,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(L=l.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,W,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var _,O,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,de as __namedExportsOrder,le as default};
