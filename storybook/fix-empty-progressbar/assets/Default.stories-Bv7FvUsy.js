import{r as A,j as r}from"./iframe-Dx9XfaX_.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-CEI59-qf.js";import{L as h}from"./Label-BC2AwvSS.js";import{u as z,F as U,a as Y}from"./Form-BwqivTHe.js";import{s as Z}from"./Action-5arwAh_1.js";import{B as u}from"./Button-MatbmytM.js";import{m as $}from"./IconWarning-BYDskjWX.js";import{C as k}from"./CopyButton-CeHyMzpp.js";import"./PropsContextProvider-DO4Dnyvq.js";import"./mergeRefs-Do6vvZAc.js";import"./index-BXqdq2Ma.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DljPEn2l.js";import"./utils-CRV-JyXd.js";import"./Text-8Az0PCun.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DNiybGdz.js";import"./Hidden-Cf6kyMxF.js";import"./useFocusRing-Dq63eQZe.js";import"./useFocus-5jQbhqKe.js";import"./TextField-C-GKv5_s.js";import"./Form-DItLtMsi.js";import"./useLabel-B5pgN2NU.js";import"./Label-DwfrzMrM.js";import"./useTextField-utlMkyTR.js";import"./useFormReset-CJtNuDui.js";import"./useControlledState-B-pjTNcE.js";import"./useFocusable-B_6jRB6i.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BkrOXECC.js";import"./FieldDescription-k8znbLFY.js";import"./Text-DiCJ_7I6.js";import"./browser-vROwQYx1.js";import"./EmulatedBoldText-Bd1dp7Af.js";import"./Tooltip-C-_CYMa7.js";import"./OverlayArrow-BvGktdbH.js";import"./ProgressBar-CsQvJS_j.js";import"./context-CaqfYy9P.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DXL8o4sQ.js";import"./ReactAriaControlledValueFix-B7uWVe_k.js";import"./ContextualHelpTrigger-BAZY_CZk.js";import"./Popover-DLaNI3Pf.js";import"./DialogTriggerView-DV5TVcRN.js";import"./context-CC-SH_Jq.js";import"./useStatic-B-mnmZm1.js";import"./Dialog-wXYbJuwK.js";import"./Button-DbcQ2aGW.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CA1KERpG.js";import"./RSPContexts-C2UEl3bJ.js";import"./Collection-DIxctTuu.js";import"./CollectionBuilder-Bwrs6onG.js";import"./Separator-DPSNb7Zj.js";import"./SearchField-HH6yUbMg.js";import"./useEvent-DGEo5c64.js";import"./SelectionManager-Dr9cLJlV.js";import"./useCollator-BpkBnSqV.js";import"./FocusScope-eWFX0WV3.js";import"./VisuallyHidden-BktHc-NH.js";import"./Heading-D16zd8UL.js";import"./Heading-Csd_7Su7.js";import"./getActionGroupSlot-B_y_2xMg.js";import"./LoadingSpinner-CnF3-Zd6.js";import"./react-children-utilities-CH1XM7O5.js";import"./onlyText-B2E5fH2t.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
