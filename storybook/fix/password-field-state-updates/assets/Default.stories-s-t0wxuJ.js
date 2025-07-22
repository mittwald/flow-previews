import{r as A,j as r}from"./iframe-RyyXbGrI.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-BZyqk3Bs.js";import{L as h}from"./Label-CFvtJK4g.js";import{u as z,F as U,a as Y}from"./Form-SW4uQAKP.js";import{s as Z}from"./Action-Dda11jpG.js";import{B as u}from"./Button-FN0w0vAZ.js";import{m as $}from"./IconWarning-C52r753T.js";import{C as k}from"./CopyButton-DkUZYYwH.js";import"./PropsContextProvider-B1uYDNh0.js";import"./mergeRefs-TzEeC_ny.js";import"./index-CkUh_6WG.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BvyzplcM.js";import"./utils-CSApR2SK.js";import"./Text-BimzKAGJ.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-l6ZdH-Sd.js";import"./useFocusRing-Cp5tV9bB.js";import"./useFocus-CDHSIkFG.js";import"./Input-BJStptK8.js";import"./Hidden-CBQwCv0D.js";import"./TextField-aC9_w8eq.js";import"./Form-BkhipvRR.js";import"./useLabel-DfsiheSh.js";import"./Label-DyZcxK1e.js";import"./useTextField-CBuiCA3E.js";import"./useFormReset-BKdfKWXM.js";import"./useControlledState-BAW98GGA.js";import"./useFocusable-B1PzsIJa.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BjHPKtj9.js";import"./FieldDescription-Cy6thD0Q.js";import"./Text-Bwgmr3xm.js";import"./browser-DZnqvRXk.js";import"./EmulatedBoldText-BGBtIkEw.js";import"./Tooltip-tUaBM6MB.js";import"./OverlayArrow-Dd73_Jpk.js";import"./ProgressBar-C1MhwVHg.js";import"./context-CVBx-lw8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D3yp90gU.js";import"./ReactAriaControlledValueFix-DBVWEaO4.js";import"./ContextualHelpTrigger-dzmtU52C.js";import"./Popover-qTkiQdIC.js";import"./DialogTriggerView-B2iMm6M7.js";import"./context-DCO0IxwY.js";import"./useStatic-CSsf_UFn.js";import"./Dialog-Dzx6c2m8.js";import"./Button-BVPFu0Yj.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BifiEpzl.js";import"./RSPContexts-CZzeIyng.js";import"./Collection-C_jXpzbR.js";import"./CollectionBuilder-BR9WT68g.js";import"./Separator-D5NfBiGb.js";import"./SearchField-lGDi9OEc.js";import"./SelectionManager-DjIO02do.js";import"./useEvent-B55JhqGe.js";import"./useCollator-Cz2D5_0V.js";import"./FocusScope-BOeRx0u7.js";import"./VisuallyHidden-BRg-FWnS.js";import"./Heading-BEXv-5jI.js";import"./Heading-CEV6SwLu.js";import"./getActionGroupSlot-CMWgW7VZ.js";import"./LoadingSpinner-CXoKjikv.js";import"./react-children-utilities-B9QXeDkW.js";import"./onlyText-Jt-2v4hI.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},l={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async()=>await Z(2e3),children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,y,g;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var C,f,F;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(F=(f=n.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var b,j,B;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(B=(j=m.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,D,R;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var L,V,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(V=d.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var W,_,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
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
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var v,O,E;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,d as WithCustomButtons,l as WithForm,p as WithPlaceholder,ce as __namedExportsOrder,le as default};
