import{r as E,j as r}from"./iframe-cREoqKkU.js";import{d as A,P as a,a as I,s,c as K}from"./PasswordCreationField-CqFxeovt.js";import{L as h}from"./Label-DZvsfDgY.js";import{u as M,F as N,a as z}from"./Form-Dn3OB4JB.js";import{s as U}from"./Action-DoeNPaZS.js";import{B as u}from"./Button-BiI53Bc2.js";import{m as Y}from"./IconWarning-BZ0g_Se0.js";import{C as Z}from"./CopyButton-iYp_o0cA.js";import"./PropsContextProvider-CoBIOD9m.js";import"./mergeRefs-qT8HekK4.js";import"./index-sbMuRXJ-.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CvRuj6qL.js";import"./utils-yXINXq--.js";import"./Text-IBVIMvOc.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-BI8C3Od1.js";import"./useFocusRing-BqHxEjMi.js";import"./useFocus-DdT7TrV6.js";import"./Input-V1vrGjHl.js";import"./Hidden-lwWUIJBj.js";import"./TextField-BSAOaaLk.js";import"./Form-FfGMTlZb.js";import"./useLabel-lx63atcd.js";import"./Label-CiJ2ihSa.js";import"./useTextField-RgubrTZC.js";import"./useFormReset-D4g7a1lX.js";import"./useControlledState-CU5MoX31.js";import"./useFocusable-6okJE7SL.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-B5o1ZaV9.js";import"./FieldDescription-OSjqEANQ.js";import"./Text-n81s0DiV.js";import"./browser-DLud-_LN.js";import"./EmulatedBoldText-Do4ZwDP6.js";import"./Tooltip-C9iccT7v.js";import"./OverlayArrow-C8FHnWmq.js";import"./ProgressBar-CUbrDEJ6.js";import"./context-B2t2DGfo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-VGcwbP3j.js";import"./ReactAriaControlledValueFix-BfrgpB0b.js";import"./context-C3KwCnKN.js";import"./useStatic-BAYq7Sdb.js";import"./ContextualHelpTrigger-CSnLGNp0.js";import"./Popover-D0iKC4-k.js";import"./DialogTriggerView-DDpbwryG.js";import"./Dialog-le0_HQU8.js";import"./Button-Cu-YDSLu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CDwaJuL4.js";import"./RSPContexts-BbhueAoC.js";import"./Collection-DyOpwtKv.js";import"./CollectionBuilder-DBdNKsot.js";import"./Separator-BbGpBOgo.js";import"./SearchField-CSUzKRpw.js";import"./SelectionManager-BiiBfqxw.js";import"./useEvent-CzSnF3qn.js";import"./useCollator-JlvF5Y_E.js";import"./FocusScope-D9lXdOdd.js";import"./VisuallyHidden--yTRKci1.js";import"./Heading-B3oRQKgK.js";import"./Heading-DJASOrw2.js";import"./getActionGroupSlot-CbQGimXy.js";import"./LoadingSpinner-BEZ9UYVH.js";import"./react-children-utilities-Byy-PyuC.js";import"./onlyText-DbsO6sQ-.js";function $(e){return e instanceof Promise}const k=(e=A)=>async o=>{if(!o)return!0;const t=e.validate(o);return $(t.isValid)?await t.isValid:t.isValid},{action:G}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=E.useState("");return r.jsx(a,{value:o,onChange:P=>{G("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Y,{})})]})},l={render:()=>{const e=I.fromDeclaration(H),o=M({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async()=>await U(2e3),children:[r.jsx(z,{rules:{required:!0,validate:k()},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=E.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(Z,{text:o})]})}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,f,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
