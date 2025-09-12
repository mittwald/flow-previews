import{r as M,j as r}from"./iframe-8yS0DUKY.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-CHLDpNJe.js";import{L as P}from"./Label-H7IJ38Py.js";import{u as N,F as z,a as U}from"./Form-9753uJXW.js";import{s as Y}from"./Action-DXjXZDHo.js";import{B as h}from"./Button-BPrvhQ-0.js";import{m as Z}from"./IconWarning-DjS1wRAW.js";import{C as G}from"./CopyButton-DoZZt1jZ.js";import"./PropsContextProvider-DEUWN1aw.js";import"./mergeRefs-CG3eH_pd.js";import"./index-ClxjEeHU.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BJ2z3tqj.js";import"./utils-B2ScHvO6.js";import"./Text-BPTsGAku.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-AwCp0aP_.js";import"./Hidden-zRhskqHJ.js";import"./useFocusRing-TjtiHe12.js";import"./useFocus-DkhmHBNs.js";import"./TextField-CYgkVBJp.js";import"./Form-DKGWyNm8.js";import"./useLabel-BvyXk9vA.js";import"./Label-B_LbA8zB.js";import"./useTextField-dhPJvLGy.js";import"./useFormReset-DkK4PY3M.js";import"./useControlledState-DCsd5L_b.js";import"./useFocusable-iysSxGPp.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-RhHTJGub.js";import"./FieldDescription-CoOCqsSm.js";import"./Text-DehAcE3E.js";import"./browser-Bz8-Zkx-.js";import"./EmulatedBoldText-BYAGMbeq.js";import"./Tooltip-BimDW-w2.js";import"./OverlayArrow-670b0n0p.js";import"./ProgressBar-BOZ4g-uB.js";import"./context-CFYUiK-W.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-tHdZCuzA.js";import"./ReactAriaControlledValueFix-DJoFc73A.js";import"./ContextualHelpTrigger-Dg5g-X-Y.js";import"./Popover-CbLe9Z0k.js";import"./DialogTriggerView-U815wYkv.js";import"./context-DZ5-b8vG.js";import"./useStatic-gPbisNQz.js";import"./Dialog-DJwy3CjE.js";import"./Button-Dg4_y2zD.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CDvWikHH.js";import"./RSPContexts-n0reoNci.js";import"./Collection-BzYqn6pP.js";import"./CollectionBuilder-B8IFPRX1.js";import"./Separator-DXkAdAs1.js";import"./SearchField-Brer819R.js";import"./useEvent-yDY_iqnF.js";import"./SelectionManager-DhO3MBuF.js";import"./useCollator-CxnDgU4L.js";import"./FocusScope-Dlq64eOc.js";import"./VisuallyHidden-DQSGeqJd.js";import"./Heading-DPyBWor6.js";import"./Heading-pr27gevH.js";import"./getActionGroupSlot-Ci8nJPI3.js";import"./LoadingSpinner-S-O73py5.js";import"./react-children-utilities-B6gMkMNE.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
