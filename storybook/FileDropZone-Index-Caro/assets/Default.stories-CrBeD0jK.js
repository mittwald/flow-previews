import{r as A,j as r}from"./iframe-Ct0YhZ2w.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-TmZq4WrF.js";import{L as h}from"./Label-DV38Rr2k.js";import{u as z,F as U,a as Y}from"./Form-st-dH4Yi.js";import{s as Z}from"./Action-BGsoQCTh.js";import{B as u}from"./Button-DzWxEQls.js";import{m as $}from"./IconWarning-Nibz28Ko.js";import{C as k}from"./CopyButton-zQSHx1AO.js";import"./PropsContextProvider-DXGdmmnh.js";import"./mergeRefs-9fQ6ccEP.js";import"./index-DiPtFLdy.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-GfqWmPDy.js";import"./utils-ZYq7i5E4.js";import"./Text-1hz8XXbQ.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Cb0btd0m.js";import"./Hidden-B-UfVuqf.js";import"./useFocusRing-B79RLIIn.js";import"./useFocus-BOvvpzaY.js";import"./TextField-BZzrHcv0.js";import"./Form-D5t9IVHW.js";import"./useLabel-CFRZWafb.js";import"./Label-B9yUG6H3.js";import"./useTextField-CmZz0IWu.js";import"./useFormReset-B8uzDw4w.js";import"./useControlledState-BKGcljyy.js";import"./useFocusable-Co66UmkD.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-B73bAD-i.js";import"./FieldDescription-DY9RVQO3.js";import"./Text-c1auIdYf.js";import"./browser-DfqMGCP2.js";import"./EmulatedBoldText-BinEGydl.js";import"./Tooltip-ArsOb2oL.js";import"./OverlayArrow-Co-RMxdG.js";import"./ProgressBar-BerxnO-h.js";import"./context-C170bgop.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Di8CJoIO.js";import"./ReactAriaControlledValueFix-B67c5BQA.js";import"./ContextualHelpTrigger-ggJ6ZFxm.js";import"./Popover-BtKD-QEY.js";import"./DialogTriggerView-BGtRBSVG.js";import"./context-DgvMtz2m.js";import"./useStatic-QRqKr9NZ.js";import"./Dialog-CAIBTckX.js";import"./Button-BQqMUkU2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CCIxnJPX.js";import"./RSPContexts-CSqJcAwc.js";import"./Collection-CsGYI6W2.js";import"./CollectionBuilder-BcuD1eRh.js";import"./Separator-B99z4htK.js";import"./SearchField-BzrmJ9Dk.js";import"./useEvent-BiRRHzhl.js";import"./SelectionManager-CdGGEfbQ.js";import"./useCollator-BztlYHwj.js";import"./FocusScope-CiY9IOxE.js";import"./VisuallyHidden-C2BGRztG.js";import"./Heading-CumZ9Fix.js";import"./Heading-s26HsVEN.js";import"./getActionGroupSlot-Ll0O5gVd.js";import"./LoadingSpinner-BsXh4HZo.js";import"./react-children-utilities-DBes0xb2.js";import"./onlyText-YEcgKRKJ.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
