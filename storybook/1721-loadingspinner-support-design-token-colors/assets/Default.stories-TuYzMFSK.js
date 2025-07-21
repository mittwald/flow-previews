import{j as r}from"./iframe-D5s8HkwO.js";import{D as B,$ as H,X as S,H as v,a0 as C}from"./IconWarning-BXD0iv1k.js";import{L as m}from"./Link-CzJlPsWn.js";import{H as s}from"./HeaderNavigation-B0l0rUp3.js";import{B as o}from"./Button-BqPne1ar.js";import{T as p}from"./Text-Cmu5-2wY.js";import{I as L}from"./Image-fCgFQaiJ.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-Clxm85AX.js";import{a as b,C as D,M as c}from"./ContextMenuContent-7Mi_59cY.js";import"./ContextMenuSection-BxLe66M-.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-tmfWri7o.js";import{H as W}from"./Heading-8TwYnZEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BCJdYZuQ.js";import"./mergeRefs-vd2X_irL.js";import"./index-DQy1KAPI.js";import"./useLocalizedStringFormatter-Dib9oUr8.js";import"./context-BRoJySMC.js";import"./utils-CSEH-j9T.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CLLKaLvj.js";import"./useFocus-ChgCHlwF.js";import"./useFocusRing-0N6EWJVX.js";import"./useFocusable-aHoAMXnZ.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-D7Ym_un6.js";import"./Button-DfwJ262K.js";import"./ProgressBar-D_TjSuLE.js";import"./Label-DFio2qHv.js";import"./Hidden-DtltZqKg.js";import"./useLabel-Bmfvdk3t.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-CypciHn-.js";import"./EmulatedBoldText-CCMYCjn2.js";import"./Text-BD_PegNR.js";import"./AlertIcon-DwdkSEzp.js";import"./Action--P7vblN7.js";import"./context-CrUoHIHV.js";import"./useStatic-CLN3_XSs.js";import"./getActionGroupSlot-C2Wzm-yy.js";import"./Popover-CAQFCXP2.js";import"./DialogTriggerView-CMcgHDDU.js";import"./Dialog-BzKhW82W.js";import"./RSPContexts-BHdKUx20.js";import"./OverlayArrow-CjUQq1PN.js";import"./useControlledState-Cw_CbRo5.js";import"./Collection-BZqkTnip.js";import"./CollectionBuilder-Czv49dlB.js";import"./Separator-DaEegn0m.js";import"./Input-3Yn7tMQf.js";import"./SearchField-8k7gExLP.js";import"./FieldError-ZxKBib3w.js";import"./Form-DSTVN1kq.js";import"./Group-DmJZ2m4p.js";import"./useTextField-BHSza5rw.js";import"./useFormReset-CQNUsXCF.js";import"./TextField-Cuvjdg2-.js";import"./SelectionManager-DA0jAVfs.js";import"./useEvent-D5-EaqKz.js";import"./useCollator-Bhx7w4gU.js";import"./FocusScope-DbtYTQ61.js";import"./VisuallyHidden-WLO0QMJU.js";import"./Switch-BWXJ4OpW.js";import"./Label-iSiMu1ip.js";import"./useToggleState-Ct81DQ_Q.js";import"./Overlay-cwGsi6Pq.js";import"./Header-BqhRX1Vx.js";import"./ButtonView-C9AQ_TKN.js";import"./Heading-BFqUjvyn.js";const to={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},i={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(f=a.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,k,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const eo=["Default","WithContextMenu","Dark","Light"];export{a as Dark,t as Default,i as Light,e as WithContextMenu,eo as __namedExportsOrder,to as default};
