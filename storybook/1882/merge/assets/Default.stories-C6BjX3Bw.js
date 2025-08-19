import{r as M,j as r}from"./iframe-TjmQ4-hc.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-WI-b6miH.js";import{L as P}from"./Label-_xLVsaVJ.js";import{u as N,F as z,a as U}from"./Form-CGbkK6YN.js";import{s as Y}from"./Action-B2WqKUlH.js";import{B as h}from"./Button-CjK60Gy6.js";import{m as Z}from"./IconWarning-1inC7auC.js";import{C as G}from"./CopyButton-vodzdDSe.js";import"./PropsContextProvider-mrDLBKOi.js";import"./mergeRefs-mF2yj4e0.js";import"./index-D7o1-TZH.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Bn62nal0.js";import"./utils-DD1RW9f4.js";import"./Text-C2aObJTh.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-9f-8oWvR.js";import"./Hidden-30ERZiSw.js";import"./useFocusRing-D7ZBK5Fy.js";import"./useFocus-Bp-EL3Xp.js";import"./TextField-BMUXjdB8.js";import"./Form-Bwnncz0S.js";import"./useLabel-d8aoteAS.js";import"./Label-bbA9jqHU.js";import"./useTextField-FvWzbSPw.js";import"./useFormReset-CwwzwEJM.js";import"./useControlledState-Cdf0eZg6.js";import"./useFocusable-BjM2CItA.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DnzwKCtL.js";import"./FieldDescription-Cp16D2cG.js";import"./Text-B1ccA9_H.js";import"./browser-CuXK39lt.js";import"./EmulatedBoldText-CMH1yXpY.js";import"./Tooltip-NX0olfBj.js";import"./OverlayArrow-Dfaoqrsw.js";import"./ProgressBar-BJaRqoq-.js";import"./context-R7iXnnvL.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CDqIJOhp.js";import"./ReactAriaControlledValueFix-DdZDRweO.js";import"./ContextualHelpTrigger-kSHyesOp.js";import"./Popover-Gm7nYTUR.js";import"./DialogTriggerView-CaZEWSSp.js";import"./context-Brmjsdqe.js";import"./useStatic-r5kIO8BX.js";import"./Dialog-BYQB8QOB.js";import"./Button-ZmvxJ__-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BK59oRjy.js";import"./RSPContexts-DCrZu0Mf.js";import"./Collection-CamF85rx.js";import"./CollectionBuilder-JPu6hEsl.js";import"./Separator-CcxH-z50.js";import"./SearchField-DwL5wZDS.js";import"./useEvent-lWEWCECp.js";import"./SelectionManager-uQED9UcT.js";import"./useCollator-mmVXCJGc.js";import"./FocusScope-DiLIjyrf.js";import"./VisuallyHidden-EAsiRlUn.js";import"./Heading-Cig5HHsR.js";import"./Heading-WZScnp-T.js";import"./getActionGroupSlot-CibZr1oe.js";import"./LoadingSpinner-NnONiqHm.js";import"./react-children-utilities-CQAWlLmY.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
