import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CtQTiInQ.js";import"./IconApp-DCJnWfXR.js";import{l as B,m as H,h as S,n as v,o as C}from"./IconWarning-C5oUT_gq.js";import{L as m}from"./Link-DQSIkvuU.js";import{H as s}from"./HeaderNavigation-C2EO0smH.js";import{B as o}from"./Button-MRB8ulec.js";import{T as p}from"./Text-CyHz7mQc.js";import{I as L}from"./Image-C4vB_TdY.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-ClSJDDde.js";import{a as b,C as D,M as c}from"./ContextMenuContent-B2AC7dPZ.js";import"./ContextMenuSection-CHLCd5sN.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-BL1kB5YL.js";import{H as W}from"./Heading-BNmY3x36.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DaA12yFO.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./index-BKF3KYqg.js";import"./useLocalizedStringFormatter-BPF35sJD.js";import"./utils-DcjC1aig.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-D57HKG0J.js";import"./useFocus-nbRcaiXq.js";import"./useFocusRing-CXNfaX1r.js";import"./useFocusable-CZzsVVWR.js";import"./dynamic-DKDa4OpU.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner--ApQP2yb.js";import"./Button-PaysjOmZ.js";import"./ProgressBar-qxoNL0r_.js";import"./Label-CvscwPf9.js";import"./Hidden-Dd0lSYNZ.js";import"./useLabel-DPCVhyCF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Text-UNZxgqCx.js";import"./react-children-utilities-DxL90CBS.js";import"./Action-DufWMBOU.js";import"./context-gLf2glmD.js";import"./useStatic-OjKlncZ_.js";import"./getActionGroupSlot-Sw8Lj_V0.js";import"./Popover-Cq0lggNi.js";import"./OverlayTrigger-CE90xnC_.js";import"./Dialog-DMNLsUVl.js";import"./RSPContexts-8O1fXkhd.js";import"./OverlayArrow-Dips9o2N.js";import"./Collection-BupEJ213.js";import"./CollectionBuilder-92b9NEiR.js";import"./Separator-pz6eaBqf.js";import"./useOverlayTriggerState-DY-7iay5.js";import"./useControlledState-BKUqB07S.js";import"./SelectionManager-B5yo36z-.js";import"./useEvent-KizPqgSt.js";import"./useCollator-Sm__dF4I.js";import"./FocusScope-71KNoUag.js";import"./VisuallyHidden-DdD-CBUj.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-Bknz71w1.js";import"./Switch-DQG_XNNZ.js";import"./Label-CHmSul_2.js";import"./useToggleState-BLH-nnKh.js";import"./useFormReset-CGMiLjFo.js";import"./Overlay-C_qzSSEB.js";import"./Header-CGzaOzE8.js";import"./ButtonView-BBg23Oel.js";import"./Heading-gLVfuOEw.js";const to={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},parameters:{backgrounds:A}},a={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,k,T;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(k=a.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const eo=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,a as Light,e as WithContextMenu,eo as __namedExportsOrder,to as default};
