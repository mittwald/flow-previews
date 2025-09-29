import{r as M,j as r}from"./iframe-CP2gb4h4.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-CP6V6z3u.js";import{L as P}from"./Label-Bjeja2lg.js";import{e as K}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-CPdZ6NEz.js";import{s as Y}from"./Action-BlPiRLea.js";import{B as h}from"./Button-D4XL1rEM.js";import{l as Z}from"./IconWarning-D-rMLbvq.js";import{C as G}from"./CopyButton-DKE5YhTW.js";import"./index-Cun1SEai.js";import"./dynamic-BzAgy5gg.js";import"./flowComponent-BPf_B31n.js";import"./index-BSCJfbqF.js";import"./clsx-B-dksMZM.js";import"./index-Cu5Se3_L.js";import"./FieldError-DU2mNmYP.js";import"./utils-D_s8y5un.js";import"./Text-CxBtgOGW.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DgudsDcS.js";import"./useFocusRing-B2VMeUUD.js";import"./useFocus-DJT_GDyJ.js";import"./Input-BVND2dLL.js";import"./Hidden-BIuobSa8.js";import"./TextField-DU8gOWaW.js";import"./context-ScZH95Xu.js";import"./Form-BiW8oAj_.js";import"./useLabel-INWae1Ce.js";import"./Label-683tI7vQ.js";import"./useTextField-D-ukG109.js";import"./useFormReset-DVyobQZd.js";import"./useControlledState-4L3XIdhl.js";import"./useFocusable-B9L3OVB4.js";import"./useFormValidation-D0HOvZ_-.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CTYByr6I.js";import"./FieldDescription-Bo22LU1X.js";import"./Text-D1BFrV-v.js";import"./browser-Cy2PTbDb.js";import"./EmulatedBoldText-DPtC43a-.js";import"./Tooltip-DG8zv9gS.js";import"./ClearPropsContextView-YbrwDHkX.js";import"./OverlayArrow-DcwP4WPp.js";import"./ProgressBar-antzpYY8.js";import"./context-BA56fXp2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-JiHDNkwa.js";import"./ReactAriaControlledValueFix-BQYXCjP1.js";import"./ContextualHelpTrigger-2AeF5JCG.js";import"./Popover-DiNyTyGh.js";import"./useOverlayController-BHsxb3JP.js";import"./context-DCT4qJcM.js";import"./useStatic-B6aSEDsB.js";import"./OverlayContextProvider-BzrNIylh.js";import"./Dialog-BATijwiU.js";import"./Button-BqMMv05B.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B35msVos.js";import"./RSPContexts-CjMIBS3_.js";import"./Collection-O2YnEgLD.js";import"./CollectionBuilder-Cm1DEo3g.js";import"./Separator-DiCclCCI.js";import"./SelectionManager-Dx1qQpQA.js";import"./useEvent-rLgwngju.js";import"./useCollator-CVHtnlLz.js";import"./FocusScope-8zrVT8FZ.js";import"./VisuallyHidden-GZJ9Ibhy.js";import"./OverlayTrigger-DMAetqx7.js";import"./ControlledNotification-DPwgQBkl.js";import"./Heading-BHZCyk50.js";import"./Heading-p8z_hoTT.js";import"./useManagedValue-BkwGnAwb.js";import"./getActionGroupSlot-BJG8VOJK.js";import"./LoadingSpinner-CCoJakpE.js";import"./react-children-utilities-xn1Qk8eq.js";const H=(o=k)=>async e=>{if(!e)return!0;try{const a=await I.fromDeclaration(o).validate(e);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},go={title:"Form Controls/PasswordCreationField",component:i,render:o=>{const[e,s]=M.useState("");return r.jsx(i,{value:e,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...o,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:o=>r.jsxs(i,{...o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const o=I.fromDeclaration(J),e=N({defaultValues:{password:""}});return r.jsxs(z,{form:e,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(o)},name:"password",children:r.jsxs(i,{validationPolicy:o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:o=>{const[e,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...o,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:e})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const bo=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,bo as __namedExportsOrder,go as default};
