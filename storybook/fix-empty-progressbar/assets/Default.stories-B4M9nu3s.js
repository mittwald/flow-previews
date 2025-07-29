import{r as A,j as r}from"./iframe-D9T-SQ_w.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-UHIR47W6.js";import{L as h}from"./Label-BSTVZqJp.js";import{u as z,F as U,a as Y}from"./Form-BJzujqly.js";import{s as Z}from"./Action-DYSYcGA4.js";import{B as u}from"./Button-DTUBFRfD.js";import{m as $}from"./IconWarning-D9gb5D__.js";import{C as k}from"./CopyButton-KiWRINKi.js";import"./PropsContextProvider-DOfdVnxG.js";import"./mergeRefs-Dpt4nLOm.js";import"./index-MwhQmWus.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CZoysCXy.js";import"./utils-DnMOHCo2.js";import"./Text-ClgQ9ANO.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-D8pjdbbd.js";import"./Hidden-SV0U3IVR.js";import"./useFocusRing-ZVwQEQ-X.js";import"./useFocus-BzfdG_e6.js";import"./TextField-CQIeTEIt.js";import"./Form-CWxNV6uB.js";import"./useLabel-DgmVUIzX.js";import"./Label-BiAaxhJ7.js";import"./useTextField-q7WjWLDn.js";import"./useFormReset-BokEu4v1.js";import"./useControlledState-iBkipCXW.js";import"./useFocusable-BvY9usgM.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Co5krp6V.js";import"./FieldDescription-UW2WuRr2.js";import"./Text-DV6mBCf8.js";import"./browser-BxWBoSIU.js";import"./EmulatedBoldText-DAr7Y6gD.js";import"./Tooltip-CP-x4xxw.js";import"./OverlayArrow-C2Xh83El.js";import"./ProgressBar-DwCiEGCB.js";import"./context-1X1M6th-.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DPVccqQm.js";import"./ReactAriaControlledValueFix-CtIphNlE.js";import"./ContextualHelpTrigger-t3_l1ncb.js";import"./Popover-Dr2PIhPL.js";import"./DialogTriggerView-DmIfJbrm.js";import"./context-4_PGxGcD.js";import"./useStatic-CzpehBqE.js";import"./Dialog-CcOmolEx.js";import"./Button-CgtNxK_E.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DglIwZgS.js";import"./RSPContexts-Mr9JIPza.js";import"./Collection-DoXxkf38.js";import"./CollectionBuilder-F1uF5_xz.js";import"./Separator-BPxbBsrv.js";import"./SearchField-BlkgpjOt.js";import"./useEvent-B9biFPGH.js";import"./SelectionManager-C0FPyjqE.js";import"./useCollator-CYP1g-jw.js";import"./FocusScope-Bai1ujT7.js";import"./VisuallyHidden-DQCLJ5yw.js";import"./Heading-CwYfEL2v.js";import"./Heading-WvEKL9U4.js";import"./getActionGroupSlot-DWP6Eju1.js";import"./LoadingSpinner-DnW7ID0m.js";import"./react-children-utilities-CuaQ3SHn.js";import"./onlyText-DsDhTxLm.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var F,j,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(B=(j=m.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,D,R;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var v,L,V;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(V=(L=l.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var T,W,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,O,E;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,de as __namedExportsOrder,le as default};
