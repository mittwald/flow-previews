import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-n-xcLTj3.js";import{n as B,o as H,i as S,p as v,q as C}from"./IconWarning-BT9Vk3ZR.js";import{L as m}from"./Link-5VdmwDAw.js";import{H as s}from"./HeaderNavigation-B-tE0eHd.js";import{B as o}from"./Button-Dhpj9FRh.js";import{T as p}from"./Text-CvWN1dQn.js";import{I as L}from"./Image-Cwimt9gX.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-CwDn_JtM.js";import{a as b,C as D,M as c}from"./ContextMenuContent-3QQNQ-JO.js";import"./ContextMenuSection-B_OuJeoD.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-DFk31cEc.js";import{H as W}from"./Heading-BMuol6x4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xVdmcuMS.js";import"./mergeProps-JAG8EIhT.js";import"./index-jVogklOU.js";import"./index-7o24Rkki.js";import"./useLocalizedStringFormatter-q0ERVXX8.js";import"./utils-CHEN54dH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-D9kiuk6J.js";import"./useFocus-XoJeJsyS.js";import"./useFocusRing-qDa0kwlS.js";import"./useFocusable-I3Nst49W.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-V_OKVJm3.js";import"./Button-C9_V-Y5S.js";import"./ProgressBar-5MBhZmuX.js";import"./Label-CnZl9U2I.js";import"./Hidden-B-9naaqD.js";import"./useLabel-DBnsbNrv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-bRyCqTVk.js";import"./Text-DatuNbZl.js";import"./react-children-utilities-JaVK66kI.js";import"./AlertIcon-B0Qoa8Mw.js";import"./Action-VjMgs9Db.js";import"./context-ah73-6JJ.js";import"./useStatic-bVMyw5l7.js";import"./getActionGroupSlot-huFUK6tI.js";import"./Popover-C_vX1M9f.js";import"./OverlayTrigger-CPKfF4Tt.js";import"./Dialog-DMm5cJWQ.js";import"./RSPContexts-DXggXklQ.js";import"./OverlayArrow-pA50mchW.js";import"./Collection-CURWNON1.js";import"./CollectionBuilder-DoslnNQQ.js";import"./Separator-C0eHURoS.js";import"./useOverlayTriggerState-B1QNhm0O.js";import"./useControlledState-B6lyO5nT.js";import"./SelectionManager-C5jjfSGo.js";import"./useEvent-CaE4O6jv.js";import"./useCollator-DYp7eA3k.js";import"./FocusScope-VprgOmaE.js";import"./VisuallyHidden-DJ8AgGjM.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-BNuGuwjN.js";import"./Switch-74Uoz9_i.js";import"./Label-DuWaARVY.js";import"./useToggleState-Ckq7rO_C.js";import"./useFormReset-DmN8pfru.js";import"./Overlay-C_RjYwGb.js";import"./Header-D-FpYDad.js";import"./ButtonView-8YEWeSet.js";import"./Heading-B6IEBoPv.js";const oo={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},parameters:{backgrounds:A}},a={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(T=(k=a.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const to=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,a as Light,e as WithContextMenu,to as __namedExportsOrder,oo as default};
