import{r as A,j as r}from"./iframe-BBx9-gCC.js";import{d as I,e as M,P as a,U,n as s,r as K}from"./PasswordCreationField-DvgENpYf.js";import{L as h}from"./Label-CN6ALsUC.js";import{u as N,F as z,a as Y}from"./Form-kHJ7jlTR.js";import{s as Z}from"./Action-BVJDTfB3.js";import{B as u}from"./Button-Ddotms0d.js";import{m as $}from"./IconWarning-47GPuUwW.js";import{C as k}from"./CopyButton-B114gkuy.js";import"./PropsContextProvider-DJQMRhIz.js";import"./mergeRefs-CjwhAStn.js";import"./index-CiDUljAk.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CQ-c_qp9.js";import"./utils-SrU--Gh3.js";import"./Text--Ew1YFd1.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-BE3jiUC2.js";import"./useFocusRing-D6klBOWk.js";import"./useFocus-BXsHwCAW.js";import"./Input-BKE4e8rI.js";import"./Hidden-BTXZmZLy.js";import"./TextField-D1wRIDn_.js";import"./Form-DewizsXc.js";import"./useLabel-CF_pOETX.js";import"./Label-CVor_bqX.js";import"./useTextField-Sw__XDSo.js";import"./useFormReset-dy85Q4T2.js";import"./useControlledState-DddH35UQ.js";import"./useFocusable-D4Fl883K.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Db676PEG.js";import"./FieldDescription-jMpf2Cwd.js";import"./Text-BRZqhCt6.js";import"./browser-Bo5IRxBw.js";import"./EmulatedBoldText-BvDF2M3d.js";import"./Tooltip-Deu89xj1.js";import"./OverlayArrow-B_GGjq9s.js";import"./ProgressBar-CJ4YAGIN.js";import"./context-Ck7bCMhf.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BhZ19fOj.js";import"./ReactAriaControlledValueFix-DV_UanZW.js";import"./ContextualHelpTrigger-BoCENCRy.js";import"./Popover-CjCquK7b.js";import"./DialogTriggerView-D7E3O5i1.js";import"./context-Dom9sQ0K.js";import"./useStatic-BS_If2Fg.js";import"./Dialog-H4IcaOME.js";import"./Button-L3SI-iJl.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dpgdsh2n.js";import"./RSPContexts-JH7zjLDh.js";import"./Collection-cumDjP4P.js";import"./CollectionBuilder-B9aud2Z5.js";import"./Separator-BwGnbFHF.js";import"./SearchField-CFDyyBZS.js";import"./SelectionManager-Jj460orM.js";import"./useEvent-CbTJhmHg.js";import"./useCollator-CBTsDb_F.js";import"./FocusScope-CSSHoYlT.js";import"./VisuallyHidden-DCQ3C4tW.js";import"./Heading-CjnzzP7a.js";import"./Heading--tvq-06a.js";import"./getActionGroupSlot-C2w1KC4o.js";import"./LoadingSpinner-AZclZqAu.js";import"./react-children-utilities-kUPJ2OdY.js";import"./onlyText-Bbx6ImJN.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return M(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",min:1}]},de={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=U.fromDeclaration(H),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,ce as __namedExportsOrder,de as default};
