import{r as E,j as r}from"./iframe-B5D6Jy2e.js";import{d as A,P as a,a as I,s,c as K}from"./PasswordCreationField-Dmke7BAO.js";import{L as h}from"./Label-C5afoFui.js";import{u as M,F as N,a as z}from"./Form-BBA-3fEK.js";import{s as U}from"./Action-BDQA-SJt.js";import{B as u}from"./Button-D_cucc2Q.js";import{m as Y}from"./IconWarning-DjYRPplk.js";import{C as Z}from"./CopyButton-CP3A7aO4.js";import"./PropsContextProvider-CnEOAU2e.js";import"./mergeRefs-C6bCzzs4.js";import"./index-98juzA4z.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DXJUVvju.js";import"./utils-Bs8Wqn-q.js";import"./Text-Bv7a287p.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-ClvX5TRg.js";import"./useFocusRing-SK3yyEZg.js";import"./useFocus-CkjZAdJ6.js";import"./Input-ryFqDY2c.js";import"./Hidden-C8fkQIAB.js";import"./TextField-PNGd04kr.js";import"./Form-DGtlbNAt.js";import"./useLabel-DkjeIhDx.js";import"./Label-36rBC0g7.js";import"./useTextField-4CgH3C31.js";import"./useFormReset-CFSg60RK.js";import"./useControlledState-Yj7M3RjN.js";import"./useFocusable-D_QF0Scb.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BGY0RJ8v.js";import"./FieldDescription--sEKc3Pw.js";import"./Text-Fuh2Ogih.js";import"./browser-C-lA9C9Q.js";import"./EmulatedBoldText-bgj99tWG.js";import"./Tooltip-C6QENxRi.js";import"./OverlayArrow-m6vw9un5.js";import"./ProgressBar-B93iLJrK.js";import"./context-Bj-w4NoV.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BQI7yYKW.js";import"./ReactAriaControlledValueFix-C2FZayrm.js";import"./context-IJ_Eymmu.js";import"./useStatic-DN3utWlK.js";import"./ContextualHelpTrigger-Cs1Q7GNy.js";import"./Popover-Bja_DHOi.js";import"./DialogTriggerView-iGbG-aRK.js";import"./Dialog-CYkZaeYk.js";import"./Button-BIn7btPV.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CBvAjfyN.js";import"./RSPContexts-v362EzbA.js";import"./Collection-Cl2OOjED.js";import"./CollectionBuilder-DuYXSFPS.js";import"./Separator-DAvj9ZN-.js";import"./SearchField-Bsl1v9iA.js";import"./SelectionManager-Yyuo4m1t.js";import"./useEvent-DdUUCx0h.js";import"./useCollator-BXMjrBT_.js";import"./FocusScope-BljfDlo2.js";import"./VisuallyHidden-1pt6eLog.js";import"./Heading-BMHWsFYU.js";import"./Heading-5Q5wgOuG.js";import"./getActionGroupSlot-ul0ry97b.js";import"./LoadingSpinner-Bd5Mqs7Q.js";import"./react-children-utilities-CeNkKxQb.js";import"./onlyText-KIOesxkI.js";function $(e){return e instanceof Promise}const k=(e=A)=>async o=>{if(!o)return!0;const t=e.validate(o);return $(t.isValid)?await t.isValid:t.isValid},{action:G}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=E.useState("");return r.jsx(a,{value:o,onChange:P=>{G("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Y,{})})]})},l={render:()=>{const e=I.fromDeclaration(H),o=M({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async()=>await U(2e3),children:[r.jsx(z,{rules:{required:!0,validate:k()},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=E.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(Z,{text:o})]})}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,f,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,b,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(b=m.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var B,S,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var L,R,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,_,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const policy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation()
      }} name="password">
          <PasswordCreationField validationPolicy={policy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var v,V,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,d as WithCustomButtons,l as WithForm,p as WithPlaceholder,ce as __namedExportsOrder,le as default};
