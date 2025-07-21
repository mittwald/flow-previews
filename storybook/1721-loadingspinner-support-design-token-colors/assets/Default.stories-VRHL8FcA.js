import{r as E,j as r}from"./iframe-D5s8HkwO.js";import{d as A,P as a,a as I,s,c as K}from"./PasswordCreationField-I3hIg4Nd.js";import{L as h}from"./Label-iSiMu1ip.js";import{u as M,F as N,a as z}from"./Form-BQ2HFYsX.js";import{s as U}from"./Action--P7vblN7.js";import{B as u}from"./Button-BqPne1ar.js";import{m as Y}from"./IconWarning-BXD0iv1k.js";import{C as Z}from"./CopyButton-J1NjBpL_.js";import"./PropsContextProvider-BCJdYZuQ.js";import"./mergeRefs-vd2X_irL.js";import"./index-DQy1KAPI.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-ZxKBib3w.js";import"./utils-CSEH-j9T.js";import"./Text-BD_PegNR.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-DmJZ2m4p.js";import"./useFocusRing-0N6EWJVX.js";import"./useFocus-ChgCHlwF.js";import"./Input-3Yn7tMQf.js";import"./Hidden-DtltZqKg.js";import"./TextField-Cuvjdg2-.js";import"./Form-DSTVN1kq.js";import"./useLabel-Bmfvdk3t.js";import"./Label-DFio2qHv.js";import"./useTextField-BHSza5rw.js";import"./useFormReset-CQNUsXCF.js";import"./useControlledState-Cw_CbRo5.js";import"./useFocusable-aHoAMXnZ.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DDxFFvpK.js";import"./FieldDescription-DzlT8Yl_.js";import"./Text-Cmu5-2wY.js";import"./browser-CypciHn-.js";import"./EmulatedBoldText-CCMYCjn2.js";import"./Tooltip-CAZI32Th.js";import"./OverlayArrow-CjUQq1PN.js";import"./ProgressBar-D_TjSuLE.js";import"./context-BRoJySMC.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Dib9oUr8.js";import"./ReactAriaControlledValueFix-B-Yb_N_I.js";import"./context-CrUoHIHV.js";import"./useStatic-CLN3_XSs.js";import"./ContextualHelpTrigger-BEp54C_Q.js";import"./Popover-CAQFCXP2.js";import"./DialogTriggerView-CMcgHDDU.js";import"./Dialog-BzKhW82W.js";import"./Button-DfwJ262K.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CLLKaLvj.js";import"./RSPContexts-BHdKUx20.js";import"./Collection-BZqkTnip.js";import"./CollectionBuilder-Czv49dlB.js";import"./Separator-DaEegn0m.js";import"./SearchField-8k7gExLP.js";import"./SelectionManager-DA0jAVfs.js";import"./useEvent-D5-EaqKz.js";import"./useCollator-Bhx7w4gU.js";import"./FocusScope-DbtYTQ61.js";import"./VisuallyHidden-WLO0QMJU.js";import"./Heading-8TwYnZEu.js";import"./Heading-BFqUjvyn.js";import"./getActionGroupSlot-C2Wzm-yy.js";import"./LoadingSpinner-D7Ym_un6.js";import"./react-children-utilities-A0hT0hcS.js";import"./onlyText-ZGHjOy3A.js";function $(e){return e instanceof Promise}const k=(e=A)=>async o=>{if(!o)return!0;const t=e.validate(o);return $(t.isValid)?await t.isValid:t.isValid},{action:G}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=E.useState("");return r.jsx(a,{value:o,onChange:P=>{G("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Y,{})})]})},l={render:()=>{const e=I.fromDeclaration(H),o=M({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async()=>await U(2e3),children:[r.jsx(z,{rules:{required:!0,validate:k()},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=E.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(Z,{text:o})]})}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,f,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
