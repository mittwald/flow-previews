import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as H}from"./index-BZISi7jw.js";import{L as s}from"./Label-vcyG9Kja.js";import{F as o}from"./FileField-D2S8Y-SB.js";import{B as t}from"./Button-6wFsZZeU.js";import{S as P}from"./Section-zA0qdTJg.js";import{F as R}from"./FieldError-CQ9RqGuN.js";import{F as k}from"./FieldDescription-C5C32NLJ.js";import{c as G,a as q}from"./IconApp-vAs-LrT2.js";import{u as w,F as U,t as _}from"./Form-BEHOL9Cg.js";import{a as M}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{A as O}from"./ActionGroup-CE92BbTj.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-ghCXY_.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./Label-CogRznyR.js";import"./utils-CoJ4Pv5P.js";import"./Hidden-DBxI3g91.js";import"./Form-CFR8hFHG.js";import"./useFocusRing-DzGSygZM.js";import"./useLabel-Hju3pN3c.js";import"./Text-CZDyhmV-.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-CQEr2Ble.js";import"./IconWarning-DIwIHW1V.js";import"./Wrap-DQq6jo70.js";import"./Text-0kfk3I9S.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./LoadingSpinner-D9XbF_eS.js";import"./Button-CNfiUnPd.js";import"./ProgressBar-DVTCW4l9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BAuzoEaO.js";import"./usePress-BZLMvQVL.js";import"./ContextMenuSection-DIi_ga2o.js";import"./Action-CBGMaTwy.js";import"./context-CYJytrr2.js";import"./useStatic-CJjI45yZ.js";import"./getActionGroupSlot-Bf7lgP6T.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Dv5UhFoB.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-r6uz-b7H.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-BSANup6i.js";import"./SearchField-ClNjenZO.js";import"./Group-B--aSUI3.js";import"./useTextField-Ky_TF6kW.js";import"./useFormReset-CilIRCFg.js";import"./TextField-C3MHW-0G.js";import"./SelectionManager-CPBFXyQE.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./v4-CtRu48qb.js";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var z=G("outline","paperclip","IconPaperclip",[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]]);const ee={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},J=M("submit"),l={},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(k,{children:"Supported formats: .pem, .pfx"})]})},p={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(R,{children:"File too large"})]})},m={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(q,{children:r.jsx(z,{})})})})},d={render:e=>{const[n,a]=H.useState(null),i=n==null?void 0:n[0];return r.jsxs(P,{children:[r.jsxs(o,{...e,isInvalid:!0,onChange:a,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const e=w(),n=_();return r.jsx(U,{form:e,onSubmit:J,children:r.jsxs(P,{children:[r.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:r.jsxs(o,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=e.watch("file"))==null?void 0:a[0])==null?void 0:i.name,r.jsx(O,{children:r.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,j,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var b,v,B;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(B=(v=p.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var y,C,I;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(I=(C=m.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var L,g,E;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} isInvalid onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var W,D,A;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileField multiple>
              <Label>Certificate</Label>
              <Button variant="outline" color="secondary">
                Select
              </Button>
            </FileField>
          </Field>
          {form.watch("file")?.[0]?.name}
          <ActionGroup>
            <Button type="submit">Upload</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const oe=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,oe as __namedExportsOrder,ee as default};
