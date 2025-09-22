import{j as e,r as k}from"./iframe-Iz-jrQ83.js";import{L as s}from"./Label-BLFOHaT0.js";import{F as o}from"./FileField-ZbgJBJkS.js";import{B as t}from"./Button-vOPcRaQ8.js";import{S as H}from"./Section-BM0Kalgb.js";import{F as G}from"./FieldError-CRVd2q9t.js";import{F as U}from"./FieldDescription-CEUkGFJG.js";import{O as q,K as w}from"./IconWarning-BfmxR99x.js";import{u as K,F as M,t as N}from"./Form-BfqBRfyD.js";import{A as T}from"./ActionGroup-DrtwoAla.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-qg-SXpsr.js";import"./mergeRefs-B-yJitBg.js";import"./index-BEFFWu2J.js";import"./useLocalizedStringFormatter-CutEnP0C.js";import"./context-BdTRL7oB.js";import"./Label-BK3HXmgw.js";import"./utils-Dydu0pBS.js";import"./Hidden-BljdK-_8.js";import"./FormField.module-CqWyJNQI.js";import"./Form-B2pzq79_.js";import"./useFocus-p13hF2Sk.js";import"./useLabel-BXusGe9W.js";import"./FieldError-7b0XYa9_.js";import"./Text-DcONEmQQ.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Dc1Igsud.js";import"./useFocusRing-DSCSSA3t.js";import"./browser-njf7oZ8k.js";import"./Text-Dk41Q_nF.js";import"./EmulatedBoldText-MtcJVW3r.js";import"./LoadingSpinner-BKi8wNla.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-P11Hto4i.js";import"./ProgressBar-xCJgXxXU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CAUR_6bc.js";import"./useFocusable-D1JGAIsJ.js";import"./ContextMenuSection-BPS38MvH.js";import"./Action-Br1QCYBe.js";import"./context-DNlUm82J.js";import"./useStatic-D6VuC2u7.js";import"./getActionGroupSlot-DopO3qdD.js";import"./dynamic-Bo4plrg9.js";import"./Popover-BCO8-tV5.js";import"./DialogTriggerView-Ct4AgVLV.js";import"./RSPContexts-BeWSySSO.js";import"./ClearPropsContextView-BFgHRwf1.js";import"./useControlledState-C1EOK33K.js";import"./FocusScope-BuNHZGqL.js";import"./useCollator-AyeBVjIE.js";import"./VisuallyHidden-BXR8MD6z.js";import"./Collection-Bghc4Zr_.js";import"./CollectionBuilder-CH12bxgH.js";import"./Separator-CTGwUbop.js";import"./SearchField-CsOWpSNr.js";import"./useTextField-c8k6OVAk.js";import"./useFormReset-Cl_PLqIc.js";import"./TextField-DzXCHFtW.js";import"./useEvent-CCByfuyl.js";import"./SelectionManager-DJ3uM6IO.js";import"./Switch-qmJ61_Ws.js";import"./useToggleState-DXGcm8AT.js";import"./chunk-PULGOXDA-8tYzn7uh.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],z=q("outline","paperclip","Paperclip",Y),{action:J}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},Q=J("submit"),l={},c={args:{isReadOnly:!0}},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(U,{children:"Supported formats: .pem, .pfx"})]})},m={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(G,{children:"File too large"})]})},d={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(w,{children:e.jsx(z,{})})})})},u={render:r=>{const[n,a]=k.useState(null),i=n==null?void 0:n[0];return e.jsxs(H,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},F={render:()=>{var a,i;const r=K(),n=N();return e.jsx(M,{form:r,onSubmit:Q,children:e.jsxs(H,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(T,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var f,h,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,j,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var y,B,v;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var g,C,L;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,O,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var E,R,D;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var W,A,P;F.parameters={...F.parameters,docs:{...(W=F.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(A=F.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const ar=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,d as IconButton,c as ReadOnly,p as WithDescription,m as WithError,u as WithHandler,F as WithReactHookForm,ar as __namedExportsOrder,sr as default};
