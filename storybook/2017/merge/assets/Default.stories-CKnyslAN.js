import{r as M,j as r}from"./iframe-ygucezpU.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-1-2XtNgN.js";import{L as P}from"./Label-CDLmKIyL.js";import{e as K}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-DbLu0b0l.js";import{s as Y}from"./Action-M3zsMwUk.js";import{B as h}from"./Button-Dsp-uMAe.js";import{p as Z}from"./IconWarning-Cs0D7_PK.js";import{C as G}from"./CopyButton-BSAJVQdW.js";import"./index-Cun1SEai.js";import"./dynamic-DtVcInqU.js";import"./PropsContextProvider-Bv8w3zYd.js";import"./mergeRefs-C0ZYRiin.js";import"./index-BaLSpMVi.js";import"./clsx-B-dksMZM.js";import"./FieldError-DAYQ7QfD.js";import"./utils-Dm2BIGqk.js";import"./Text-DGTV1FYP.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CBEz0WD9.js";import"./useFocusRing-CFbBFNPO.js";import"./useFocus-BBcZge3l.js";import"./Input-B7REfsMR.js";import"./Hidden-sZrOLhP9.js";import"./TextField-BbxH2TaW.js";import"./context-Bf2zQWgY.js";import"./Form-BvlELYJ2.js";import"./useLabel-BIOlG5Yn.js";import"./Label-BffVQixZ.js";import"./useTextField-DtO-7VKy.js";import"./useFormReset-CqyvH-u7.js";import"./useControlledState-y1NsnI_K.js";import"./useFocusable-CmrOOHc4.js";import"./useFormValidation-CdOk873P.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DDKUc_sF.js";import"./FieldDescription-BpCD0Rfv.js";import"./Text-c8GLfZrX.js";import"./browser-BpjCDOvP.js";import"./EmulatedBoldText-oasbrdcJ.js";import"./Tooltip-D02cn6t8.js";import"./ClearPropsContextView-DkeNy3v-.js";import"./ProgressBar-CbOwlFL2.js";import"./context-DzmzBjoy.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-TZqZqT18.js";import"./ReactAriaControlledValueFix-Dt6l_KdS.js";import"./ContextualHelpTrigger-CceyYKWI.js";import"./Popover-BoT9uJpy.js";import"./DialogTriggerView-C9zXFnun.js";import"./context-stas4iuT.js";import"./useStatic-B18UmQuP.js";import"./Button-CrpDhUsv.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BqrMcV_T.js";import"./RSPContexts-Bg25W6Pr.js";import"./FocusScope-kmUkL49h.js";import"./useCollator-CZ70YDPg.js";import"./VisuallyHidden-CIvyEb44.js";import"./Collection-CP_tcz-x.js";import"./CollectionBuilder-ZRNciRSk.js";import"./Separator-CbVhXDvO.js";import"./SelectionManager-D4AWNFz3.js";import"./useEvent-Dau2XfVg.js";import"./Heading-CwsWyhxJ.js";import"./Heading-Bxqgoihn.js";import"./useManagedValue-DPLcNzey.js";import"./getActionGroupSlot-igF58ako.js";import"./LoadingSpinner-DHdSJfkf.js";import"./react-children-utilities-9tndT6rn.js";const H=(o=k)=>async e=>{if(!e)return!0;try{const a=await I.fromDeclaration(o).validate(e);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ho={title:"Form Controls/PasswordCreationField",component:i,render:o=>{const[e,s]=M.useState("");return r.jsx(i,{value:e,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...o,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:o=>r.jsxs(i,{...o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const o=I.fromDeclaration(J),e=N({defaultValues:{password:""}});return r.jsxs(z,{form:e,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(o)},name:"password",children:r.jsxs(i,{validationPolicy:o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:o=>{const[e,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...o,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:e})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const Po=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,Po as __namedExportsOrder,ho as default};
