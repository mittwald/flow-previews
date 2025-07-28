import{r as A,j as r}from"./iframe-DkoDxfR2.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-BJp053gG.js";import{L as h}from"./Label-XXLO5rpK.js";import{u as z,F as U,a as Y}from"./Form--YIAPmWe.js";import{s as Z}from"./Action-Bcu2qL72.js";import{B as u}from"./Button-Cp9hbBL4.js";import{m as $}from"./IconWarning-Ck0HvR0Q.js";import{C as k}from"./CopyButton-CVqtdmkC.js";import"./PropsContextProvider-DL9J830y.js";import"./mergeRefs-Buk7y6lM.js";import"./index-DkP-SiYJ.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-X-QluTji.js";import"./utils-BOrYOV9F.js";import"./Text-Ctymnv7p.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-T6PFTdYn.js";import"./Hidden-De8D6e53.js";import"./useFocusRing-BDB7k6Pq.js";import"./useFocus-Ca2dqt2u.js";import"./TextField-CLGPgbQU.js";import"./Form-CnPMOS5f.js";import"./useLabel-BuM0FhpV.js";import"./Label-DRKfcyWW.js";import"./useTextField-D0_dgvqT.js";import"./useFormReset-BbPVrHjA.js";import"./useControlledState-JTLXT68E.js";import"./useFocusable-BICMmXOk.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-lU0r29TM.js";import"./FieldDescription-BVYKETey.js";import"./Text-CnS74kup.js";import"./browser-Bh7wweWi.js";import"./EmulatedBoldText-CUhPQfrL.js";import"./Tooltip-CLUdCjwS.js";import"./OverlayArrow-DZuWnV6Z.js";import"./ProgressBar-D05nSwtV.js";import"./context-De-s_lIT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DJ33xXvN.js";import"./ReactAriaControlledValueFix-r54tIFdD.js";import"./ContextualHelpTrigger-BzYeyOPK.js";import"./Popover-BthwtJdm.js";import"./DialogTriggerView-CduBBth1.js";import"./context-92DLRHvs.js";import"./useStatic-DQBBioJh.js";import"./Dialog-C4-038Ac.js";import"./Button-DYTF7ZZs.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DxrgSCNh.js";import"./RSPContexts-CqAwA2eB.js";import"./Collection-B9R2_Cw6.js";import"./CollectionBuilder-DALOaQAz.js";import"./Separator-CIHlVyAb.js";import"./SearchField-z4vXhhfv.js";import"./useEvent-C4SFAJBx.js";import"./SelectionManager-CvEqXULD.js";import"./useCollator-COoHYzT4.js";import"./FocusScope-DjWdfa-n.js";import"./VisuallyHidden-C20fNH5S.js";import"./Heading-BOxKIZt8.js";import"./Heading-D_yR9HjO.js";import"./getActionGroupSlot-BidRnFe8.js";import"./LoadingSpinner-kZmvy7rj.js";import"./react-children-utilities-DcZe_rmP.js";import"./onlyText-CxvRInnz.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
