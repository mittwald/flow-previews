import{r as M,j as r}from"./iframe-C41GO6P6.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-CsR6dZ6y.js";import{L as P}from"./Label-BmUyaMI1.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-DfG2V2ai.js";import{s as Y}from"./Action-DU6nM0zW.js";import{B as h}from"./Button-EU7ZCBUb.js";import{q as Z}from"./IconWarning-C5RwbqDR.js";import{C as G}from"./CopyButton-Ce780Qt1.js";import"./dynamic-DxnCaHhV.js";import"./PropsContextProvider-BlE6VFtE.js";import"./mergeRefs-Hgr2X06A.js";import"./index-D__hiUrI.js";import"./clsx-B-dksMZM.js";import"./FieldError-qUs-TTn2.js";import"./utils-Be5F4DcQ.js";import"./Text-Bnb73OL0.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-celsVWdW.js";import"./Hidden-COug4O8x.js";import"./useFocusRing-DXsfSaAZ.js";import"./useFocus-CcyM5uvG.js";import"./TextField-DApuMKmH.js";import"./Form-DZUJdQjd.js";import"./useLabel--RfYT5XW.js";import"./Label-I71uq1jB.js";import"./useTextField-CQA55vhK.js";import"./useFormReset-DAlqRR2j.js";import"./useControlledState-D2xxPiTl.js";import"./useFocusable-DyjaqCu5.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DxG-LHoh.js";import"./FieldDescription-DhiOcCPR.js";import"./Text-BYSgteT5.js";import"./browser-DspoMTVt.js";import"./EmulatedBoldText-CJIUXOgz.js";import"./Tooltip-q22yRv_3.js";import"./ClearPropsContextView-CpAffOzl.js";import"./ProgressBar-BdICdwMW.js";import"./context-Om8YW_Qo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DK3NG-Ma.js";import"./ReactAriaControlledValueFix-BW-fLwFe.js";import"./ContextualHelpTrigger-C1G1tRw1.js";import"./Popover-DEl9axMZ.js";import"./DialogTriggerView-BwB5gCJZ.js";import"./context-1RA5jvOs.js";import"./useStatic-DHBtTVNq.js";import"./Button-DlD3fRGu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DSqdD5KI.js";import"./RSPContexts-B6QAlzIf.js";import"./FocusScope-V0DR1oSw.js";import"./useCollator-D5nYlsQq.js";import"./VisuallyHidden-D1Yd7fBj.js";import"./Collection-C5OyY5G9.js";import"./CollectionBuilder-DOOsEd3G.js";import"./Separator-CWruQEFN.js";import"./SearchField-BbBM1aCT.js";import"./useEvent-C6r-N21P.js";import"./SelectionManager-ARZMK7nk.js";import"./Heading-DJ1QGBtr.js";import"./Heading-DSFKQ-67.js";import"./useManagedValue-6Bb7qVi8.js";import"./getActionGroupSlot-BqgUIaia.js";import"./LoadingSpinner-MF8PlszG.js";import"./react-children-utilities-DSphdVCU.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,q,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
