import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import"./IconApp-Do9-6_HN.js";import{l as B,m as H,h as S,n as v,o as C}from"./IconWarning-Dahq1OkV.js";import{L as m}from"./Link-BgVcIbAC.js";import{H as s}from"./HeaderNavigation-BK1O4yr_.js";import{B as o}from"./Button-BJXlxerY.js";import{T as p}from"./Text-BwURBFsG.js";import{I as L}from"./Image-fZKjDe5a.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-ha9O2AR3.js";import{a as b,C as D,M as c}from"./ContextMenuContent-KfSqTWgn.js";import"./ContextMenuSection-6FJCuZh4.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-DehRk4na.js";import{H as W}from"./Heading-BkqfOpTv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CB_r5UQ3.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./utils-BAtcVSHo.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-AhNAqARA.js";import"./useFocus-CGq_xkJe.js";import"./useFocusRing-D6MLu59I.js";import"./useFocusable-D8BATkaF.js";import"./dynamic-DKDa4OpU.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BWATc-O8.js";import"./Button-Bd7GnYjT.js";import"./ProgressBar-B6tGqqoL.js";import"./Label--FbMCZJS.js";import"./Hidden-kqRI_mPI.js";import"./useLabel-Bh1EGhcd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Text-CxIdO6ok.js";import"./react-children-utilities-fm2cgFnI.js";import"./Action-oPy_g2KX.js";import"./context-B15Zrh1O.js";import"./useStatic-D-e10mVk.js";import"./getActionGroupSlot-CDFIfnsV.js";import"./Popover-BF1x99R-.js";import"./OverlayTrigger-y32pdg1B.js";import"./Dialog-CI6Vrv3H.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-B-bZ71PV.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-BHsfcKmd.js";import"./CollectionBuilder-C_ibKIdv.js";import"./Separator-BH0DZ6tu.js";import"./SelectionManager-DjqhJ6FU.js";import"./useEvent-0eO3yNkM.js";import"./useCollator-CDl7pGf-.js";import"./FocusScope-FOL1CxoP.js";import"./VisuallyHidden-FconPwXt.js";import"./DialogTriggerView-CFDJjbxM.js";import"./Switch-DQlvSO6F.js";import"./Label-DOL6pGCw.js";import"./useToggleState-BhKtZDfS.js";import"./useFormReset-4n_yD9ws.js";import"./Overlay-CJ0hTS6O.js";import"./Header-n5o_wodV.js";import"./ButtonView-CS6E1gtX.js";import"./Heading-DmITIAYD.js";const ro={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},n={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(M=(f=a.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,k,T;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(k=n.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const oo=["Default","WithContextMenu","Dark","Light"];export{a as Dark,t as Default,n as Light,e as WithContextMenu,oo as __namedExportsOrder,ro as default};
