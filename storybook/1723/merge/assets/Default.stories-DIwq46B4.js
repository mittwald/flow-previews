import{r as x,j as r}from"./iframe-BpEavT04.js";import{d as b,e as g,P as a,V as y,n as s,r as f}from"./PasswordCreationField-DYdQBfUU.js";import{L as h}from"./Label-CiJybHgW.js";import{u as C,F,a as j}from"./Form-CXoJvbIg.js";import{s as S}from"./Action-h-c20zp_.js";import{B as u}from"./Button-CCZgVc0N.js";import{l as B}from"./IconWarning-vA6HsYJq.js";import{C as D}from"./CopyButton-d3XcK0-d.js";import"./index-k6QiPQ3a.js";import"./PropsContextProvider-REkcYbgF.js";import"./mergeRefs-BC_BuoXn.js";import"./index-D2hwKXUM.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BmEWAGf_.js";import"./utils-CpHgE-S6.js";import"./Text-DWLjOUr2.js";import"./filterDOMProps-i7L6S0l1.js";import"./Group-DG2VW6yX.js";import"./Hidden-ZJTH-wDD.js";import"./useFocusRing-DmvqpG-I.js";import"./useFocus-BaJLfW1J.js";import"./TextField-CoVUwaSO.js";import"./Form-DJ2svD4f.js";import"./useLabel-6-vYiz3X.js";import"./Label-DpfcozJA.js";import"./useTextField-DUt04o8w.js";import"./useFormReset-CovQJR7M.js";import"./useControlledState-Cjeeyz03.js";import"./useFocusable-C6ZTHalD.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DY8OUBEl.js";import"./FieldDescription-Vq0coIIu.js";import"./Text-CcXeyI30.js";import"./browser-DDZLlA7g.js";import"./EmulatedBoldText-CG9Doyve.js";import"./Tooltip-B6_B3WNM.js";import"./OverlayArrow-CMORky_-.js";import"./ProgressBar-Bg2NAwr4.js";import"./context-1jMNVxHt.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DJSuZDt4.js";import"./ReactAriaControlledValueFix-BKN3vDTM.js";import"./ContextualHelpTrigger-CPHel92k.js";import"./Popover-Db5mAq-N.js";import"./DialogTriggerView-DpWn2yoK.js";import"./context-DfZyAinb.js";import"./useStatic-BZhl3rWC.js";import"./Dialog-DAXkTNx8.js";import"./Button-CEEqH0ki.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DGfPwR5g.js";import"./RSPContexts-z3euxKCR.js";import"./Collection-ScrsRFZc.js";import"./CollectionBuilder-DQGAitfS.js";import"./Separator-VTYWgg2d.js";import"./SearchField-DiZ_IivY.js";import"./useEvent--O7DxxGG.js";import"./SelectionManager-BpD0kl0T.js";import"./useCollator-bTe8AndB.js";import"./FocusScope-CJ6Nm8ct.js";import"./VisuallyHidden-DD5pbayJ.js";import"./Heading-9sAKSscM.js";import"./Heading-DFRS6AVv.js";import"./getActionGroupSlot-B7TFfcap.js";import"./LoadingSpinner-CRDc6voB.js";import"./react-children-utilities-BRqwMO6J.js";import"./onlyText-f4ZtWOzK.js";const V=(e=b)=>async o=>{if(!o)return!0;const t=await e.validate(o);return g(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,R={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[f.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},zr={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=x.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(B,{})})]})},d={render:()=>{const e=y.fromDeclaration(R),o=C({defaultValues:{password:""}});return r.jsxs(F,{form:o,onSubmit:async t=>{await S(2e3),console.log("submitted",t)},children:[r.jsx(j,{rules:{required:!0,validate:V(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=x.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(D,{text:o})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...c.parameters?.docs?.source}}};const Ur=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,Ur as __namedExportsOrder,zr as default};
